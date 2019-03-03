import Parser from "../Parser";
import OptionalSection from "../sections/OptionalSection";
import TypeDeclarationParser from "./TypeDeclarationParser";
import Colon from "../../tokens/characters/Colon";
import Coma from "../../tokens/characters/Coma";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import AbstractClassDeclaration
    from "../../ast/statements/AbstractClassDeclaration";
import AbstractClassBodyParser
    from "../sections/AbstractClassBodyParser";

export default class AbstractClassParser extends Parser {

}

AbstractClassParser.statement = AbstractClassDeclaration;
AbstractClassParser.sections = [
    "abstract",
    // parse extensions
    new OptionalSection(
        Colon,
        new RepetitiveBySection(
            Coma,
            new TypeDeclarationParser
        ),
    ),
    new OptionalSection(
        new AbstractClassBodyParser
    )
];