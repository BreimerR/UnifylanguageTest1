import {abstractMethodCall, isDefined, log} from "../helpers";

export class Parser {
    constructor(code) {
        this.parseTree = {};
        this.code = code;
        this.parsers = [];
        this.i = 0;
    }

    parse() {
        throw new Error('Implement method for the class parser.')
    }

    addVisitor(...visitor) {
        visitor.forEach(v => {
            this.parsers.push(v);
        })
    }

    removeVisitor(index) {
        let a = [];
        // skip non-required visitor
        for (let i in this.parsers) if (i !== index) a.push(this.parsers[i]);

        this.parsers = a;
    }

    shouldParse() {
        // test sections
    }


    get increaseIndex() {
        this.i += 1
    }

    get reduceIdnex() {
        this.i -= 1;
    }

}


let a = 12;
let b = -1;



