import Splitter from "../../language/parsers/Splitter";
import Space from "../unify/parse/tokens/Space";
import Tab from "../unify/parse/tokens/Tab";
import NewLine from "../unify/parse/tokens/NewLine";
import {isDefined, log} from "./helpers";
import UnexpectedToken from "../unify/parse/exceptions/UnexpectedToken";

export default class Language {
    constructor(code, definitions) {
        this.code = code;
        this.definitions = definitions;
        this.index = -1;
        this.line = 1;
        this.col = 0;
        this.tokenTypes = [];
        this.ast = [];
        this.parsers = [];
    }

    get tokenize() {
        if (!!this.code && this.code.length) {
            this.tokens = Splitter.split(this.code);
            this.considerSpaces = true;

            this.organize;
            return true;
        }

        return false;
    }

    get parser() {
        let parsers = this.parsers;

        for (let parser of parsers) {
            if (parser.shouldParse(Object.create(this))) {
                return new parser(this);
            }
        }


        throw new UnexpectedToken(this)
    }

    get organize() {
        let types = this.tokenTypes, tokens = this.tokens;

        let i = 0;
        for (let token of tokens) {
            // sort items into proper tokens
            for (let type of types) {
                if (type.isValid(token)) this.tokens[i] = new type(token);

            }
            i++;
        }

    }


    get nextToken() {

        this.prevToken = this.cT;
        this.prevIndex = this.index;
        this.index += 1;
        let token = this.tokens[this.index];

        if (!this.endOfFile) {
            if (token.is(NewLine)) {
                this.line += 1;
                this.col = 0;
            }
            
            if (isDefined(this.prevToken)) {
                this.col += this.prevToken.token.length;
            }

            return this.cT = this.considerSpaces ? token : (token.isEither(Space, Tab, NewLine) ? this.nextToken : token)
        }

        return null
    }


    get endOfFile() {
        return this.index > this.tokens.length - 1;
    }
}