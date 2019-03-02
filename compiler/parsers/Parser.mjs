import {Parser as LanguageParser} from "../../language/parsers/Parser"


/// want to make it as so that
// a parser test takes in scanned code
// with test order
// runs the test order against the provided code
// returns valid or false with the found order

// run a simple section test
// if section test is a whole parser
// run the whole test
/**
 * sections is a successive order of occurring token items
 * one after the other in that order
 * */
export default class Parser extends LanguageParser {
    constructor() {
        super();
        this.isParseSection = false;
    }

    static get testSections() {
        // if undefined then we use the default would be empty
        // noinspection JSUnresolvedVariable
        return this.sections.slice(0, this.testSectionsThreshold)
    }

    shouldParse(tokens, sections = this.constructor.testSections) {
        return this.constructor.runTest(tokens, sections)
    }

    static shouldParse({copy: tokens}) {
        let {considerSpaces} = tokens;

        tokens.considerSpaces = this.considerSpaces;

        let test = this.runTest(tokens, this.testSections);


        tokens.considerSpaces = considerSpaces;

        return test;
    }

    static runTest(tokens, sections = this.sections, errors = this.errors) {

        for (let i in sections) {
            //if any section fails return false
            if (!this.test(tokens, sections[i])) {
                if (errors !== undefined) {
                    let error = errors[i];
                    if (error !== undefined) {
                        let token = tokens.currentToken;
                        if (!!token) {
                            let {line,row} = token;
                            console.log(error + "\n" + `On line ${line} row ${row}`+`\n${this.name}`);
                        } else console.log(error)
                    }
                }

                return false
            }
        }

        return true;
    }

    static parse(tokens) {
        let {considerSpaces, safe} = tokens;
        tokens.considerSpaces = this.considerSpaces;
        tokens.safe = this.safe;
        let stmnt = new this.statement();
        stmnt.claimTokens(this.consumeTokens(tokens));
        tokens.considerSpaces = considerSpaces;
        tokens.safe = safe;
        return stmnt;
    }

    static test(tokens, section) {
        let bool = false;

        if (section instanceof Parser) {
            if (section.isParseSection) {
                bool = section.test(tokens);
            } else bool = section.shouldParse(tokens)

        } else if (tokens.hasValidToken) {
            if (typeof section === "string") {
                bool = tokens.nextToken.validate(section);
            } else bool = tokens.nextToken.is(section)
        }

        return bool;
    }
}


Parser.i = -1;
Parser.considerSpaces = false;