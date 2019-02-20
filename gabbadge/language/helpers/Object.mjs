export default class Object {
	merge() {
	
	}
	
	constructor(object) {
		Object.assign(this, object);
	}
	
	defineProperty(name, descriptors) {
		this.static.defineProperty(this, name, descriptors);
	}
	
	defineProperties(descriptors) {
		this.static.defineProperties(this, descriptors);
	}
	
	extend(donor) {
		return this.static.extend(this, donor);
	}
	
	static extend(target, donor) {
		for (let key in donor) target[key] = donor[key];
		
		return target;
	}
	
	static isSelf(instance) {
		return instance instanceof this;
	}
	
	static structureProperties(properties, defaultDescriptors = {}) {
		let k, v;
		for (k in properties) {
			v = properties[k];
			JObject.extend(properties[k] = {
				value: v
			}, defaultDescriptors)
		}
		return properties;
	}
	
	addInterceptor(interceptor, async = false, then, catcher) {
		if (async === true) {
			return this.addAsyncInterceptor(interceptor, then, catcher)
		}
		
		if (!this.hasInterceptors) {
			// define interceptor interface
			this.defineProperties(JObject.structureProperties({
				interceptors: [],
				removeInterceptor: i => delete this.interceptors[i],
				clearInterceptors: () => delete this.interceptors,
				runInterceptors: function (v, k) {
					this.interceptors.forEach((func) => {
						func.call(v, k, v)
					})
				}
			}))
		}
		
		this.interceptors.push(interceptor)
	}
	
	addAsyncInterceptor(interceptor, then, catcher) {
		return this.addInterceptor(function (val, key) {
			return new Promise(resolve => {
				setTimeout(resolve, 0, interceptor.call(this, val, key))
			}).then(then).catch(catcher)
		});
	}
	
	get hasInterceptors() {
		return this.interceptors ? !!this.interceptors.length : false;
	}
	
	each(iterator, async, then, final, error) {
		return this.static.each(this, iterator, async, this, then, final, error)
	}
	
	asyncEach(iterator, then, error) {
		return this.static.asyncEach(this, iterator, then);
	}
	
	static forEach(object, iterator) {
		for (let key in object) {
			let v = object[key];
			if (iterator.call(v, key, v) === true) break;
		}
	}
	
	forEach(iterator) {
		this.static.forEach(this, iterator);
	}
	
	static each(obj, iterator, async = false, then, error) {
		if (obj !== undefined || obj !== null) {
			if (async === true) {
				return this.asyncEach(obj, iterator, then, error);
			} else {
				let func = function (k, v) {
					return iterator.call(v, k, v)
				};
				
				if (obj instanceof this) {
					func = function (k) {
						!obj.hasInterceptors || obj.runInterceptors(this, k);
						
						return iterator.call(this, k, this)
					};
				}
				
				return this.forEach(obj, func);
			}
		}
	}
	
	static asyncEach(obj, iterator, then) {
		let p = [];
		this.each(obj, (k, v) => {
			p.push(
				new Promise((r, rj) => setTimeout(() => {
					try {
						let bool = iterator.call(v, k, v);
						if (bool === true) {
							/// TODO this section has to clear all the remaining setTIme outs.
							/// Suggested solution is to name all setTime outs
							/// by placing them all in a queue
						}
						r(bool);
					} catch (e) {
						rj(e);
					}
				})).then(res => {
					//return results so that it is available in the final array
					let result;
					!isFunc(then) || (((result = then.call(v, k, v)) === undefined) || (res = result));
					return res;
				}).catch(err => {
					throwEr(err.message += `  at key ${k} with value ${v}`)
				})
			)
		});
		
		return Promise.all(p);
	}
	
	// function used to extend the this prototype
	static fn(properties, defaultDescriptions = {}) {
		Object.defineProperties(this.prototype, JObject.structureProperties(properties, defaultDescriptions));
	}
	
	static staticFn(properties) {
		Object.defineProperties(this, JObject.structureProperties(properties));
	}
	
	removeEmpty() {
		this.each((v, k) => {
			if (empty(v)) {
				delete this[k];
			}
		});
	}
	
	get static() {
		return this.__proto__.constructor;
	}
}


export function asyncForEach() {

}


export function each(obj, callBack) {

}
