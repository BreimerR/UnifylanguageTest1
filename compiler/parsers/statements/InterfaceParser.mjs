import Parser from "../Parser";
import NotParserSection from "../sections/NotSection";
import Identifier from "../../tokens/identifiers/Identifier";
import Keyword from "../../tokens/identifiers/Keyword";
import ZeroOrManySections
    from "../sections/ZeroOrManySections";
import OptionalSection from "../sections/OptionalSection";
import TypeDeclarationParser from "./TypeDeclarationParser";

export default class InterfaceParser extends Parser {

}

InterfaceParser.statement = InterfaceDeclaration;

InterfaceParser.sections = [
    "interface",
    new NotParserSection(Identifier, Keyword),
    new OptionalSection(
        Colon,
        new TypeDeclarationParser,
        new ZeroOrManySections(
            Coma,
            new TypeDeclarationParser
        )
    ),
    new OptionalSection(
        new InterfaceBodyDeclarationParser
    )
];