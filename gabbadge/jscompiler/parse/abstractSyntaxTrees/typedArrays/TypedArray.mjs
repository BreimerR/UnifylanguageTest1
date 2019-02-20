import UnexpectedToken from "../../exceptions/UnexpectedToken";
import {log} from "../../../../language/helpers";
import {Argument} from "../../parsers/statements/ArgumentParser";

export default class TypedArray extends Array {
    constructor(type, ...args) {
        super();
        this.type = type;
        this.push(...args);

    }


    push(...args) {
        for (let i = 0; i < args.length; i++) {
            let arg = args[i];
            if (arg instanceof this.type) {
                this[this.length] = arg;
            } else throw new TypeError(`Unexpected type for argument ${i} found ${arg.constructor.name} required ${this.type.prototype.constructor.name}`)
        }
    }

}




