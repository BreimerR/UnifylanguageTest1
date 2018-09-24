import {log} from "../../../language/helpers";
import UnexpectedToken from "../exceptions/UnexpectedToken"
import LBracket from "../tokens/LBracket";
import Token from "../tokens/Token";

class ParserError extends Error {

}

export default class Parser {
    constructor(lang) {
        this.lang = lang;
        lang.considerSpaces = this.constructor.considerSpaces;
        this.tokens = [];
    }


    get nextToken() {
        return this.lang.nextToken;
    }

    get prevToken() {
        return this.lang.prevToken
    }

    get peek() {
        let tk = this.nextToken;
        this.prevToken;

        return tk;
    }

    get currentToken() {
        return this.lang.cT;
    }

    skip(length) {
        while (length--) {
            this.nextToken
        }
    }

    static shouldParse(lang) {
        let bool, tests = this.tests;

        for (let test of tests) {
            lang.considerSpaces = this.considerSpaces;
            let cT = lang.cT;
            if (cT !== null) {
                let b = false, isTt;
                if (Array.isArray(test)) {
                    for (let t of test) {
                        if (cT instanceof t) {
                            b = true;
                            break;
                        }
                    }
                } else if (isTt = (test.prototype instanceof Token)) {
                    b = cT instanceof test;
                } else if (!isTt) {
                    for (let name in test) {
                        if (name === 'optional') {

                        } else {
                            if (cT instanceof test[name] && name === cT.token) {
                                b = true;
                                break
                            }
                        }
                    }
                }

                if (bool === undefined) {
                    bool = b;
                } else {
                    bool = bool && b;
                }
                lang.nextToken
            } else break;
        }


        return bool;
    }


    parse() {
        throw new ParserError(`${this.constructor.name} does not have method implement method`);
    }

    addToken(token) {
        this.tokens.push(token)
    }

    static parse(tokens, currentIndex) {
        let parser = new this(tokens, currentIndex);
        return parser.parse();
    }

}

Parser.tests = [];
Parser.considerSpaces = false;