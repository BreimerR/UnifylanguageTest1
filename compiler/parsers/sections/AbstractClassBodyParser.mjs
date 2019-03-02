import Parser from "../Parser";
import RSqBracket from "../../tokens/characters/RSqBracket";
import LSqBracket from "../../tokens/characters/LSqBracket";
import ZeroOrManyParseSections from "./ZeroOrManyParseSections";
import AlternativeSectionParser from "./AlternativeSectionParser";
import PropertyDeclarationParser
    from "../statements/PropertyDeclarationParser";
import AbstractClassBody
    from "../../ast/statements/AbstractClassBody";

export default class AbstractClassBodyParser extends Parser {

}

AbstractClassBodyParser.stetement = AbstractClassBody;
AbstractClassBodyParser.sections = [
    LSqBracket,
    new ZeroOrManyParseSections(
        new AlternativeSectionParser(
            new PropertyDeclarationParser,
            new MethodDeclarationParser,
            new MethodStartDeclarationParser
        )
    ),
    RSqBracket
];