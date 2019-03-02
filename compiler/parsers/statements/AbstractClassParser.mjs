import Parser from "../Parser";
import OptionalParser from "../sections/OptionalParser";
import TypeDeclarationParser from "./TypeDeclarationParser";
import Colon from "../../tokens/characters/Colon";
import Coma from "../../tokens/characters/Coma";
import RepetitiveByParser from "../sections/RepetitiveByParser";
import AbstractClassDeclaration
    from "../../ast/statements/AbstractClassDeclaration";

export default class AbstractClassParser extends Parser {

}

AbstractClassParser.statement = AbstractClassDeclaration;
AbstractClassParser.sections = [
    "abstract",
    // parse extensions
    new OptionalParser(
        Colon,
        new RepetitiveByParser(
            Coma,
            new TypeDeclarationParser
        ),
    ),
    new OptionalParser(
        new AbstractClassBodyParser
    )
];