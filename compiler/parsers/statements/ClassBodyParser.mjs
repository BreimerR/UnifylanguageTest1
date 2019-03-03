import Parser from "../Parser";
import ClassBody from "../../ast/statements/ClassBody";
import LSqBracket from "../../tokens/characters/LSqBracket";
import RSqBracket from "../../tokens/characters/RSqBracket";
import ZeroOrManySections from "../sections/ZeroOrManySections";
import PropertyStartParser from "../sections/PropertyStartParser";
import AlternativeSection from "../sections/AlternativeSection";
import VariableDeclarationParser from "./VariableDeclarationParser";
import FunctionParser from "./FunctionParser";
import ParseSection from "../sections/ParseSection";
import OptionalSection from "../sections/OptionalSection";
import FunctionBodyParser from "./FunctionBodyParser";
import Identifier from "../../tokens/identifiers/Identifier";
import LBracket from "../../tokens/characters/LBracket";
import RBracket from "../../tokens/characters/RBracket";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import TypeDeclarationParser from "./TypeDeclarationParser";
import Pipe from "../../tokens/characters/Pipe";
import Colon from "../../tokens/characters/Colon";

export default class ClassBodyParser extends Parser {

}

ClassBodyParser.statement = ClassBody;

ClassBodyParser.sections = [
    LSqBracket,
    new ZeroOrManySections(
        new PropertyStartParser,
        new AlternativeSection(
            new AlternativeSection(
                new ParseSection(
                    "get",
                    Identifier,
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
                new OptionalSection(
                    new AlternativeSection(
                        "prefix",
                        "infix"
                    )
                ),
                new FunctionParser
            )
        )
    ),
    RSqBracket
];