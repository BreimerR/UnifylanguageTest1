import Parser from "../Parser"
import EndOfFile from "../../tokens/characters/EndOfFile";
import EndOfFileStatement
    from "../../ast/statements/EndOfFileStatement";


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


export default class EndOfFileParser extends Parser {

}

EndOfFileParser.considerSpaces = false;
EndOfFileParser.statement = EndOfFileStatement;
EndOfFileParser.sections = [EndOfFile];