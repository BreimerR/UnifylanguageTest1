import Parser from "../Parser";
import LSqBracket from "../../tokens/characters/LSqBracket";
import RSqBracket from "../../tokens/characters/RSqBracket";
import AlternativeZeroOrMany from "../sections/AlternativeZeroOrMany";
import ParseSection from "../sections/ParseSection";
import Identifier from "../../tokens/identifiers/Identifier";
import Colon from "../../tokens/characters/Colon";
import AlternativeSection from "../sections/AlternativeSection";
import NumberParser from "./NumberParser";
import StringParser from "./StringParser";
import FunctionParser from "./FunctionParser";
import CommentParser from "./CommentParser";

export default class ObjectBodyParser extends Parser {

}

ObjectBodyParser.sections = [
    LSqBracket,
    new AlternativeZeroOrMany(
        new ParseSection(
            Identifier,
            Colon,
            new AlternativeSection(
                new NumberParser,
                new StringParser,
                /*new ArrayParser()*/
            )
        ),
        new FunctionParser,
        new CommentParser,
    ),
    RSqBracket
];