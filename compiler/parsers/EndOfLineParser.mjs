import Parser from "./Parser"
import SColon from "../tokens/characters/SColon"
import AlternativeSectionParser from "./AlternativeSectionParser";
import OptionalParser from "./OptionalParser";
import EndOfFile from "../tokens/characters/EndOfFile";
import ParseSection from "./ParseSection";
import NewLine from "../tokens/characters/NewLine";
import OneOrManyParseSection from "./OneOrManyParseSection";

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

}

EndOfLineParser.considerSpaces =  false;

EndOfLineParser.defSections(
    new OptionalParser(new OneOrManyParseSection(NewLine)),
    EndOfFile
);