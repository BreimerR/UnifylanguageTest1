import Parser from "../Parser";


// test the sections in a parser to see if any are parsable then parse
// return array of statements or tokens
export default class ParseSection extends Parser {
    constructor(...sections) {
        super();
        this.sections = sections;
        this.isParseSection = true
    }

    test(tokens) {
        return this.constructor.runTest(tokens, this.sections)
    }

    /*return a mixed array of statements and tokens*/
    static parse(tokens) {
        let parsed = [], {sections} = this;

        for (let sI in sections) {
            let section = sections[sI];
        }

        return parsed;
    }
}