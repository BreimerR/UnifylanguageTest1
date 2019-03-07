import Parser from "../Parser";
import ForwardSlash from "../../tokens/characters/ForwardSlash";
import Asterisk from "../../tokens/characters/Asterisk";
import AlternativeSection from "../sections/AlternativeSection";
import Identifier from "../../tokens/identifiers/Identifier";
import SColon from "../../tokens/characters/SColon";
import Coma from "../../tokens/characters/Coma";
import ZeroOrManySections from "../sections/ZeroOrManySections";
import DocComment from "../../ast/statements/DocComment";
import ParseSection from "../sections/ParseSection";
import FailOnSection from "../sections/FailOnSection";
import Colon from "../../tokens/characters/Colon";
import RBracket from "../../tokens/characters/RBracket";
import LBracket from "../../tokens/characters/LBracket";
import Dot from "../../tokens/characters/Dot";
import NewLine from "../../tokens/characters/NewLine";
import Space from "../../tokens/characters/Space";
import Tab from "../../tokens/characters/Tab";
import Equals from "../../tokens/characters/Equals";
import DExclamation from "../../tokens/characters/DExclamation";
import NotSection from "../sections/NotSection";
import Token from "../../tokens/Token";
import AlternativeZeroOrMany from "../sections/AlternativeZeroOrMany";

export default class DocCommentParser extends Parser {

}

let end = new ParseSection(
    Asterisk,
    ForwardSlash
);

DocCommentParser.considerSpaces = true;
DocCommentParser.statement = DocComment;
DocCommentParser.sections = [
    new ZeroOrManySections(
        new AlternativeSection(
            Tab, Space, NewLine
        )
    ),
    ForwardSlash,
    Asterisk,
    Asterisk,
    new AlternativeZeroOrMany(
        // test an asterisk but if future  token is forwardSlash return false
        new FailOnSection(
            ...end.sections
        ),
        new NotSection(
            Token,
            Asterisk
        )
    ),
    end
];