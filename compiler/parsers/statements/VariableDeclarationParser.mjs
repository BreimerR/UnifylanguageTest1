import Parser from "../Parser";
import Dollar from "../../tokens/characters/Dollar";
import Identifier from "../../tokens/identifiers/Identifier";
import VariableDeclaration
    from "../../ast/statements/VariableDeclaration";
import OptionalSection from "../sections/OptionalSection";
import SColon from "../../tokens/characters/SColon";
import AlternativeSection
    from "../sections/AlternativeSection";
import TypeDeclarationParser from "./TypeDeclarationParser";
import ParseSection from "../sections/ParseSection";
import Pipe from "../../tokens/characters/Pipe";
import DefaultValueOrTestParser from "./DefaultValueOrTestParser";
import DelegationParser from "./DelegationParser";
import AssignmentParser from "./AssignmentParser";

export default class VariableDeclarationParser extends Parser {

}

VariableDeclarationParser.statement = VariableDeclaration;

VariableDeclarationParser.sections = [
    // Type declaration or a Dollar
    new AlternativeSection(
        new ParseSection(
            new TypeDeclarationParser,
            new OptionalSection(
                Pipe,
                new TypeDeclarationParser
            )
        ),
        Dollar
    ),
    Identifier,
    new OptionalSection(
        new DefaultValueOrTestParser
    ),
    new OptionalSection(
        new AssignmentParser
    ),
    new OptionalSection(
        new DelegationParser
    ),
    new OptionalSection(
        SColon
    )
];