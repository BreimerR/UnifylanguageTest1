import {isEmpty} from "../helpers";
import Splitter from "../tokens/Splitter";

export default class Language {
    // a language has tokens
    // a language has parsers
    // a language is has tokenizer

    constructor(tokens, parsers) {
        this.tokens = tokens;
        this.parsers = parsers
    }

    tokenize() {
        let code = this.code;
        if (isEmpty(code)) throw new Error("Code string provided is empty");

        code = Splitter.split(code);

        code.forEach(v => {
            this.tokens.forEach(constructor => {
                if (constructor.validate(v)) {

                }
            })
        })
    }


    parse() {

    }

}