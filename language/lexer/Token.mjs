import {log} from "../helpers";
import Object from "../helpers/Object"

export class Tokenizer {
	constructor(rgx, code) {
		this.systaxTree = {};
		
		log(rgx[Symbol.match](code));
	}
	
	get rgex() {
		if (this.rgx) return this.rgx;
		
		this.rgx = {};
		for (let name in this.identifiers) {
		
		}
	}
	
	get signs() {
		return /[~!@#$%^&()|/\\_+\-=]*?/;
	}
	
	get identifiers() {
		return /(_+)?[a-zA-Z][a-zA-Z\d_]*/
	}
	
	
}



