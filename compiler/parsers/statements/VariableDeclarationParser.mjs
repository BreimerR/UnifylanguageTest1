import Parser from "../Parser";
import Dollar from "../../tokens/characters/Dollar";
import NotParserSection from "../sections/NotParserSection";
import Identifier from "../../tokens/identifiers/Identifier";
import Keyword from "../../tokens/identifiers/Keyword";
import VariableDeclaration
    from "../../ast/statements/VariableDeclaration";
import OptionalParser from "../sections/OptionalParser";
import SColon from "../../tokens/characters/SColon";
import AlternativeSectionParser
    from "../sections/AlternativeSectionParser";
import TypeDeclarationParser from "./TypeDeclarationParser";
import ParseSection from "../sections/ParseSection";
import ZeroOrManyParseSections
    from "../sections/ZeroOrManyParseSections";
import Pipe from "../../tokens/characters/Pipe";

export default class VariableDeclarationParser extends Parser {

}


VariableDeclarationParser.statement = VariableDeclaration;

VariableDeclarationParser.sections = [
    // Type declaration or a Dollar
    new AlternativeSectionParser(
        new ParseSection(
            new TypeDeclarationParser,
            new ZeroOrManyParseSections(
                Pipe,
                new TypeDeclarationParser
            )
        ),
        Dollar
    ),
    new NotParserSection(Identifier, Keyword),
    new OptionalParser(
        new DefaultValueOrTestParser
    ),
    new OptionalParser(SColon)
];