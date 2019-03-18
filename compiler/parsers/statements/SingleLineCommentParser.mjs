import Parser from "../Parser";
import NewLine from "../../tokens/characters/NewLine";
import Space from "../../tokens/characters/Space";
import Tab from "../../tokens/characters/Tab";
import ForwardSlash from "../../tokens/characters/ForwardSlash";
import NotSection from "../sections/NotSection";
import Token from "../../tokens/Token";
import SingleLineComment
    from "../../ast/statements/SingleLineComment";
import OptionalSection from "../sections/OptionalSection";
import AlternativeZeroOrMany from "../sections/AlternativeZeroOrMany";
import EndOfFile from "../../tokens/characters/EndOfFile";

export default class SingleLineCommentParser extends Parser {
}

SingleLineCommentParser.considerSpaces = true;
SingleLineCommentParser.statement = SingleLineComment;
SingleLineCommentParser.sections = [
    new AlternativeZeroOrMany(
        Tab, Space, NewLine
    ),
    ForwardSlash,
    ForwardSlash,
    new AlternativeZeroOrMany(
        new NotSection(Token, NewLine,EndOfFile)
    ),
    new OptionalSection(NewLine)
];