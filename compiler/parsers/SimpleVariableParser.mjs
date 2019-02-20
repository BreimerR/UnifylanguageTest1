import Parser from "./Parser";
import AlternativeSectionParser from "./AlternativeSectionParser";
import Identifier from "../tokens/identifiers/Identifier";
import Dollar from "../tokens/characters/Dollar";
import EndOfLineParser from "./EndOfLineParser";
import VariableDeclaration from "../ast/statements/VariableDeclaration";
import ParseSection from "../../gabbadge/ParseSection";
import SimpleVariableDeclaration from "../ast/statements/SimpleVariableDeclaration";
import SColon from "../tokens/characters/SColon";

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
}
SimpleVariableParser.statement = SimpleVariableDeclaration;

SimpleVariableParser.considerSpaces = false;

SimpleVariableParser.defSections(
    new AlternativeSectionParser(Identifier, Dollar),
    Identifier,
    SColon
);

SimpleVariableParser.thresholdIndex = 3;


