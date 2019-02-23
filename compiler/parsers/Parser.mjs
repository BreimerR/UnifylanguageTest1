import {Parser as LanguageParser} from "../../language/parsers/Parser"
import Token from "../tokens/Token"

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

    static consumeTokens(tokens, sections = this.parseSections) {
        let consumed = [];
        sections = sections[Symbol.iterator]();

        for (let section of sections) {
            if (section instanceof Parser) {
                consumed.push(section.consumeTokens(tokens))
            } else {
                consumed.push(tokens.nextToken)
            }
        }

        return consumed;
    }

    static defSections(...sections) {
        this.parseSections = sections;
    }


    // this are the section that are required to get a valid parser
    // this are the section that are required to get a valid parser
    static get parseThresholdSections() {
        return this.parseSections.slice(0, this.thresholdIndex);
    }

    static shouldParse({copy: tokens}) {
        let bool, {considerSpaces} = tokens;

        tokens.considerSpaces = this.considerSpaces;

        let sections = this.parseThresholdSections;

        for (let i in sections) {
            let section = sections[i];
            let test = section instanceof Parser ? section.test(tokens) : (tokens.hasRemTokens ? tokens.nextToken.is(section) : false);

            bool = bool === undefined ? test : bool && test
        }

        tokens.considerSpaces = considerSpaces;

        return bool;
    }

    test(tokens, sections = this.constructor.parseSections) {
        let bool;

        for (let i in sections) {
            let section = sections[i],
                test = section instanceof Parser ? section.test(tokens) : (tokens.hasTokens ? tokens.nextToken.is(section) : false);

            // exit on a single item failure
            if (test === false) return false;

            bool = bool === undefined ? test : bool && test
        }

        return bool;
    }

    consumeTokens(tokens, sections) {
        return this.constructor.consumeTokens(tokens, sections)
    }
}


Parser.i = -1;
