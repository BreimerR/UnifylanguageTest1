import Parser from "../Parser";
import NotParserSection from "../sections/NotParserSection";
import Identifier from "../../tokens/identifiers/Identifier";
import Keyword from "../../tokens/identifiers/Keyword";
import ZeroOrManyParseSections
    from "../sections/ZeroOrManyParseSections";
import OptionalParser from "../sections/OptionalParser";
import TypeDeclarationParser from "./TypeDeclarationParser";

export default class InterfaceParser extends Parser {

}

InterfaceParser.statement = InterfaceDeclaration;

InterfaceParser.sections = [
    "interface",
    new NotParserSection(Identifier, Keyword),
    new OptionalParser(
        Colon,
        new TypeDeclarationParser,
        new ZeroOrManyParseSections(
            Coma,
            new TypeDeclarationParser
        )
    ),
    new OptionalParser(
        new InterfaceBodyDeclarationParser
    )
];