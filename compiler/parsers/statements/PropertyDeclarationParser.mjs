import Parser from "../Parser";
import PropertyDeclaration
    from "../../ast/statements/PropertyDeclaration";
import NotSection from "../sections/NotSection";
import Identifier from "../../tokens/identifiers/Identifier";
import Keyword from "../../tokens/identifiers/Keyword";
import AlternativeSection from "../sections/AlternativeSection";
import DelegationParser from "./DelegationParser";
import AssignmentParser from "./AssignmentParser";
import ParseSection from "../sections/ParseSection";
import OptionalSection from "../sections/OptionalSection";
import SColon from "../../tokens/characters/SColon";

export default class PropertyDeclarationParser extends Parser {

}

PropertyDeclarationParser.statement = PropertyDeclaration;
PropertyDeclarationParser.sections = [
    new NotSection(Identifier, Keyword),
    new AlternativeSection(
        new ParseSection(
            new AssignmentParser,
            new DelegationParser
        ),
        new DelegationParser,
        new AssignmentParser,
    ),
    new OptionalSection(SColon)
];