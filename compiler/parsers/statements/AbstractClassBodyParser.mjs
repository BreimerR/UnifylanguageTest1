import Parser from "../Parser";
import RSqBracket from "../../tokens/characters/RSqBracket";
import LSqBracket from "../../tokens/characters/LSqBracket";
import ZeroOrManySections from "../sections/ZeroOrManySections";
import AlternativeSection from "../sections/AlternativeSection";
import AbstractClassBody
    from "../../ast/statements/AbstractClassBody";
import ParseSection from "../sections/ParseSection";
import OptionalSection from "../sections/OptionalSection";
import VariableDeclarationParser
    from "./VariableDeclarationParser";
import FunctionStartParser from "./FunctionStartParser";
import FunctionParser from "./FunctionParser";
import RBracket from "../../tokens/characters/RBracket";
import LBracket from "../../tokens/characters/LBracket";
import CommentParser from "./CommentParser";
import PropertyStartParser from "../sections/PropertyStartParser";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import TypeDeclarationParser
    from "./TypeDeclarationParser";
import Pipe from "../../tokens/characters/Pipe";
import Identifier from "../../tokens/identifiers/Identifier";
import RSBracket from "../../tokens/characters/RSBracket";
import LSBracket from "../../tokens/characters/LSBracket";
import Colon from "../../tokens/characters/Colon";
import FunctionBodyParser from "./FunctionBodyParser";
import ArgumentsParser from "./ArgumentsParser";
import SColon from "../../tokens/characters/SColon";
import DefaultValueOrTestParser from "./DefaultValueOrTestParser";

export default class AbstractClassBodyParser extends Parser {

}

AbstractClassBodyParser.stetement = AbstractClassBody;

let functionStart = new FunctionStartParser;

functionStart.sections[2] = new AlternativeSection(
   new ParseSection(
       LBracket, RBracket
   ),
    new ArgumentsParser
);

AbstractClassBodyParser.sections = [
    LSqBracket,
    new ZeroOrManySections(
        new AlternativeSection(
            new CommentParser,
            new ParseSection(
                new OptionalSection(
                    new PropertyStartParser
                ),
                new AlternativeSection(
                    new AlternativeSection(
                        new ParseSection(
                            "get",
                            Identifier,
                            new OptionalSection(
                                Colon,
                                new RepetitiveBySection(
                                    Pipe,
                                    new TypeDeclarationParser)
                            ),
                            new FunctionBodyParser
                        ),
                        new ParseSection(
                            "set",
                            Identifier,
                            new OptionalSection(
                                Colon,
                                new RepetitiveBySection(
                                    Pipe,
                                    new TypeDeclarationParser)
                            ),
                            LBracket,
                            new VariableDeclarationParser,
                            RBracket,
                            new FunctionBodyParser
                        )
                    ),
                    new VariableDeclarationParser,
                    new ParseSection(
                        "abstract",
                        new AlternativeSection(
                            new ParseSection(
                                new RepetitiveBySection(
                                    Pipe,
                                    new TypeDeclarationParser
                                )
                            ),
                            new ParseSection(
                                LBracket,
                                new RepetitiveBySection(
                                    Pipe,
                                    new TypeDeclarationParser
                                ),
                                RBracket,
                                LSBracket, RSBracket
                            )
                        ),
                        Identifier,
                        new OptionalSection(
                            new DefaultValueOrTestParser
                        ),
                        new OptionalSection(SColon)
                    ),
                    new FunctionParser,
                    new ParseSection(
                        functionStart,
                        new OptionalSection(SColon)
                    )
                )
            )
        )
    ),
    RSqBracket
];