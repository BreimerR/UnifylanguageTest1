import Parser from "../Parser";
import AssignmentDeclaration
    from "../../ast/statements/AssignmentDeclaration";
import Equals from "../../tokens/characters/Equals";
import AlternativeSection
    from "../sections/AlternativeSection";
import NumberParser from "./NumberParser";
import StringParser from "./StringParser";
import ExpressionParser from "./ExpressionParser";
import Identifier from "../../tokens/identifiers/Identifier";

export default class AssignmentParser extends Parser {

}

AssignmentParser.statement = AssignmentDeclaration;

AssignmentParser.sections = [
    Equals,
    new AlternativeSection(
        new ExpressionParser,
        new NumberParser,
        new StringParser,
        Identifier
    )
];