/*
* scanner
* lexical analysis
*
* */

import {Tokens} from "./ast/Tokens"


export default class Language {
    /*
    * consider taking in the main file for a full on
    * compiler
    * */
    constructor(code, fileName, ...parsers) {
        this.tokens = this.tokenize(code);
        this.fileName = fileName;
        this.code = code;
        this.ast = [];
        this.parsers = parsers;
    }


    /*
     * because js supports string reading we should
     * use string checks instead of char reads
     *
     * other tokenizer's rely on the reading
     * of chars per chars and forming what
     * is required form a char string sequence
     * */

    /**
     *
     * @param  code String
     * @return Tokens
     * */
    tokenize(code) {
        // return new Code(Splitter.split(code));
    }

    compile() {
        throw new Error("Language must define the actions of this function")
    }

    /**
     * request the next valid parser from
     * available parsers by calling Parser.shouldParse(tokens.copy)
     * */
    static get parser() {
        let {tokens} = this, parser;

        this.parsers.forEach(p => {
            if (p.shouldParse(tokens)) parser = p
        });

        return parser;
    }


}

Language.parsers = [];