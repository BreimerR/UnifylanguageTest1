import Parser from "../Parser";
import RSqBracket from "../../tokens/characters/RSqBracket";
import LSqBracket from "../../tokens/characters/LSqBracket";
import ZeroOrManySections from "./ZeroOrManySections";
import AlternativeSection from "./AlternativeSection";
import PropertyDeclarationParser
    from "../statements/PropertyDeclarationParser";
import AbstractClassBody
    from "../../ast/statements/AbstractClassBody";

export default class AbstractClassBodyParser extends Parser {

}

AbstractClassBodyParser.stetement = AbstractClassBody;
AbstractClassBodyParser.sections = [
    LSqBracket,
    new ZeroOrManySections(
        new AlternativeSection(
            new PropertyDeclarationParser,
            new MethodDeclarationParser,
            new MethodStartDeclarationParser
        )
    ),
    RSqBracket
];