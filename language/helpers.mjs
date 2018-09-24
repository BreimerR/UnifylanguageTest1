export const checkType = (item, required) => typeof item === required;
export const isUndefined = (item) => item === undefined;
export const isDefined = (item) => !isUndefined(item);
export const empty = (item) => item === null || isDefined(item);
export const {log, dir, warn, error, table} = console;
export const abstractMethodCall = function (context) {
    throw new Error(`This method has to be implemented by the class implementing ${context.constructor.name}`)
};
// square
export const sqr = a => a * a;
// exponent
export const exP = (a, b) => a ** b;
export const isEven = (num) => num % 2 === 0;
export const isOdd = (num) => !isEven(num);

export const typeCheck = (item, required, message) => checkType(item, required) || throwEr(message || `Required value of type ${required} got ${typeof item}`, TypeError);
// test for functions.
export const isFunc = func => checkType(func, 'function');

export const isFunction = isFunc;
// test for objects.
export const isObject = obj => checkType(obj, 'object');
//  count strings objects and arrays
export const count = item => (isString(item) || isArray(item)) ? item.length : (isObject(item) ? count(Object.keys(item)) : 0);
// test for strings
export const isString = string => checkType(string, 'string');
// test for array
export const isArray = arr => {
    return Array.isArray(arr)
};
// test for numbers.
export const isNum = num => checkType(num, 'number');

export const isNumber = num => checkType(num, 'number');

export const __assign = Object.assign;

export const hasOwn = Object.prototype.hasOwnProperty;

function isBoolean(variable) {
    return variable === true || variable === false;
}

function isNumberWhenParsed(variable) {
    return !isNaN(Number(variable));
}

function undefinedDefine(item, value) {
    return typeof item === 'undefined' ? value : item;
}

function isPlainObject(variable) {
    if (!variable || typeof variable !== "object" || variable.nodeType || Object.prototype.toString.call(variable) !== "[object Object]") {
        return false;
    }
    let proto = Object.getPrototypeOf(variable);
    return !proto || proto.hasOwnProperty("constructor") && proto.constructor === Object;
}

function isEmptyObject(variable) {
    for (let name_1 in variable) {
        if (variable.hasOwnProperty(name_1)) {
            return false;
        }
    }
    return true;
}

/**
 * The <strong><code>defineProperty()</code></strong> function provides a
 * shortcut to defining a property that cannot be accidentally iterated across.
 */
function defineProperty(proto, name, value) {
    if (proto) {
        Object.defineProperty(proto, name, {
            configurable: true,
            writable: true,
            value: value
        });
    }
}