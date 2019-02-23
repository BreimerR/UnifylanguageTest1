import Parser from "./Parser";

export default class ParseSection extends Parser {

    // a parse section consumes tokens as tested
    parse(tokens) {
        let sections = this.sections, ast = [];
        // consume sections one by one
        for (let i in sections) {
            let section = sections[i];

        }

        return ast;
    }

    consumeTokens(tokens) {
        return super.consumeTokens(tokens, this.sections);
    }


}