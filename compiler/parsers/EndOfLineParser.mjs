import Parser from "./Parser"
import Identifier from "../tokens/identifiers/Identifier"
import Keyword from "../tokens/identifiers/Keyword"
import OneOrManyParseSection from "./OneOrManyParseSection"
import NewLine from "../tokens/characters/NewLine"
import SColon from "../tokens/characters/SColon"
import AlternativeSectionParser from "./AlternativeSectionParser";
import ParseSection from "./ParseSection";

/**
 * Type Name
 * :"Smile"
 * = Brier
 *
 * class
 * Simple {
 *
 * }
 * */


export default class EndOfLineParser extends Parser {
    test(tokens) {
        let {safe,considerSpaces} = tokens;
        tokens.safe = true;
        tokens.considerSpaces = true;
        let test = super.test(tokens);
        tokens.safe = safe;
        tokens.considerSpaces = considerSpaces;
        return test;
    }

    consumeTokens() {

    }
}


EndOfLineParser.defSections(
    new AlternativeSectionParser (
        SColon,
        new ParseSection(
            new OneOrManyParseSection(NewLine), new AlternativeSectionParser(Keyword, Identifier)
        ),
    )
);