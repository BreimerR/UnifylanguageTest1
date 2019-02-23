import Parser from "./Parser";
import AlternativeSectionParser from "./AlternativeSectionParser";
import Identifier from "../tokens/identifiers/Identifier";
import Dollar from "../tokens/characters/Dollar";
import EndOfLineParser from "./EndOfLineParser";
import SimpleVariableDeclaration from "../ast/statements/SimpleVariableDeclaration";
import SColon from "../tokens/characters/SColon";
import Token from "../tokens/Token";
import NonConsumeParseSection from "./NonConsumeParseSection";
import OptionalParser from "./OptionalParser";
import EndOfFile from "../tokens/characters/EndOfFile";
import OneOrManyParseSection from "./OneOrManyParseSection";
import NewLine from "../tokens/characters/NewLine";

/**SimpleVariableDeclaration
 * $a = 12
 * Int a = 12
 * (SimpleType|Dollar) Identifier SimpleAssignment?
 * */

/**SimpleType
 * Identifier
 * */

/** SimpleAssignment
 * = Literal
 * */

/** Literal
 * (RegexLiteral|StringLiteral|ArrayLiteral|ObjectLiteral|NumberLiteral)
 * */

export default class SimpleVariableParser extends Parser {

}

SimpleVariableParser.statement = SimpleVariableDeclaration;

SimpleVariableParser.considerSpaces = false;

SimpleVariableParser.defSections(
    new AlternativeSectionParser(Identifier, Dollar),
    Identifier,
    new OptionalParser(SColon),
    new OptionalParser(new OneOrManyParseSection(NewLine)),
    new OptionalParser(EndOfFile)
);

