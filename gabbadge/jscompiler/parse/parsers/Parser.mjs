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