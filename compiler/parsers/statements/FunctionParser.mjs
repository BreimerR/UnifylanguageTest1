import Parser from "../Parser";
import FunctionDeclaration
    from "../../ast/statements/FunctionDeclaration";
import FunctionStartParser from "./FunctionStartParser";
import LSqBracket from "../../tokens/characters/LSqBracket";
import RSqBracket from "../../tokens/characters/RSqBracket";
import FunctionBody from "../../ast/statements/FunctionBody";
import ParseSection from "../sections/ParseSection";
import AlternativeSection from "../sections/AlternativeSection";
import TypeDeclarationParser from "./TypeDeclarationParser";
import NumberParser from "./NumberParser";
import StringParser from "./StringParser";
import CommentParser from "./CommentParser";
import RBracket from "../../tokens/characters/RBracket";
import LBracket from "../../tokens/characters/LBracket";
import VariableDeclarationParser from "./VariableDeclarationParser";
import AlternativeZeroOrMany from "../sections/AlternativeZeroOrMany";
import ExpressionParser from "./ExpressionParser";
import OptionalSection from "../sections/OptionalSection";
import SColon from "../../tokens/characters/SColon";

export default class FunctionParser extends Parser {

}

export class FunctionBodyParser extends Parser {
}

FunctionParser.statement = FunctionDeclaration;
FunctionParser.sections = [
    new FunctionStartParser,
    new FunctionBodyParser
];

FunctionBodyParser.statement = FunctionBody;

FunctionBodyParser.sections = [
    LSqBracket,
    new AlternativeZeroOrMany(
        new CommentParser,
        new VariableDeclarationParser,
        new FunctionParser,
        new ParseSection(
            "return",
            new AlternativeSection(
                new StringParser,
                new ParseSection(
                    "new",
                    new TypeDeclarationParser,
                    LBracket,
                    RBracket
                ),
                new NumberParser
            )
        ),
        new ParseSection(
            new ExpressionParser,
            new OptionalSection(
                SColon
            )
        )
    ),
    RSqBracket
];
