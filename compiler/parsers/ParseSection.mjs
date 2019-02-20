import Parser from "./Parser";

export default class ParseSection extends Parser {
    test(tokens) {
        let bool;
        let sections = this.sections;

        for (let i in sections) {
            let section = sections[i],
                test = section instanceof Parser ? section.test(tokens) : (tokens.hasRemTokens ? tokens.nextToken.is(section) : false);
            bool = bool === undefined ? test : bool && test
        }

        return bool;
    }

    // a parse section consumes tokens as tested
    parse(tokens) {
        let sections = this.sections,ast = [];
        // consume sections one by one
        for (let i in sections) {
            let section = sections[i];

        }


        return ast;
    }
}