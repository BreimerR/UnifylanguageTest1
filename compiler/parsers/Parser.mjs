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


    static [Symbol.iterator](){
        return this
    }

    static next(){
        return {
            value:this.parseSections[++this.i],
            done:!(this.i < this.parseSections.length)
        }
    }

    static parse(tokens) {

    }

    static consumeTokens(tokens) {
        let consumed = [];
        for (let section of this) {
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
        let bool;
        tokens.considerSpaces = this.considerSpaces;

        let sections = this.parseThresholdSections;

        for (let i in sections) {
            let section = sections[i];
            let test = section instanceof Parser ? section.test(tokens) : (tokens.hasValidToken ? tokens.nextToken.is(section) : false);

            bool = bool === undefined ? test : bool && test
        }

        tokens.considerSpaces = true;

        return bool;
    }

    test(tokens) {
        let bool;
        let sections = this.constructor.parseSections;

        for (let i in sections) {
            let section = sections[i],
                test = section instanceof Parser ? section.test(tokens) : (tokens.hasRemTokens ? tokens.nextToken.is(section):false);

            bool = bool === undefined ? test : bool && test
        }

        return bool;
    }
}


Parser.i = -1;
