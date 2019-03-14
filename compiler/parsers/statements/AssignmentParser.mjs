import Parser from "../Parser";
import AssignmentDeclaration
    from "../../ast/statements/AssignmentDeclaration";
import Equals from "../../tokens/characters/Equals";
import AlternativeSection
    from "../sections/AlternativeSection";
import LiteralParser from "./LiteralParser";

export default class AssignmentParser extends Parser {

}

AssignmentParser.statement = AssignmentDeclaration;

AssignmentParser.sections = [
    Equals,
    new AlternativeSection(
        new LiteralParser
    )
];