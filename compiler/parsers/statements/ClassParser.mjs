import Parser from "../Parser";
import NotSection from "../sections/NotSection";
import Identifier from "../../tokens/identifiers/Identifier";
import Keyword from "../../tokens/identifiers/Keyword";
import OptionalSection from "../sections/OptionalSection";
import ClassDeclaration from "../../ast/statements/ClassDeclaration";
import TypeDeclarationParser from "./TypeDeclarationParser";
import ClassExtensionParser from "./ClassExtensionParser";
import AbstractionImplementationParser
    from "./AbstractionImplementationParser";
import ClassBodyParser from "./ClassBodyParser";
import ArgumentsParser from "./ArgumentsParser";
import ZeroOrManySections from "../sections/ZeroOrManySections";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import Coma from "../../tokens/characters/Coma";
import ArgumentDeclarationParser from "./ArgumentDeclarationParser";
import PropertyStartParser from "../sections/PropertyStartParser";
import LBracket from "../../tokens/characters/LBracket";
import RBracket from "../../tokens/characters/RBracket";
import ParseSection from "../sections/ParseSection";

export default class ClassParser extends Parser {

}


ClassParser.statement = ClassDeclaration;
ClassParser.sections = [
    "class",
    new TypeDeclarationParser,
    new OptionalSection(
        LBracket,
        new RepetitiveBySection(
            Coma,
            new ParseSection(
                new OptionalSection(
                    new PropertyStartParser
                ),
                new ArgumentDeclarationParser
            )
        ),
        RBracket
    ),
    new OptionalSection(
        new ClassExtensionParser,
    ),
    new OptionalSection(
        // covers interfaces and  abstract classes
        new AbstractionImplementationParser
    ),
    new OptionalSection(
        new ClassBodyParser
    )
];