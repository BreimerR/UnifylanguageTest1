import Parser from "../Parser";
import NotParserSection from "../sections/NotParserSection";
import Identifier from "../../tokens/identifiers/Identifier";
import Keyword from "../../tokens/identifiers/Keyword";
import OptionalParser from "../sections/OptionalParser";

export default class ClassParser extends Parser {

}


ClassParser.statement = ClassDeclaration;
ClassParser.sections = [
    "class",
    new NotParserSection(Identifier, Keyword),
    new OptionalParser(
        new ClassExtensionParser,
    ),
    new OptionalParser(
        // covers interfaces and  abstract classes
        new AbstractionImplementationParser
    ),
    new OptionalParser(
        new ClassBodyParser
    )
];