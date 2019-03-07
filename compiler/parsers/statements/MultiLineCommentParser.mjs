import Parser from "../Parser";
import MultiLineComment from "../../ast/statements/MultiLineComment";
import ForwardSlash from "../../tokens/characters/ForwardSlash";
import Asterisk from "../../tokens/characters/Asterisk";
import ZeroOrManySections from "../sections/ZeroOrManySections";
import Identifier from "../../tokens/identifiers/Identifier";
import AlternativeSection from "../sections/AlternativeSection";
import FailOnSection from "../sections/FailOnSection";
import ParseSection from "../sections/ParseSection";
import Colon from "../../tokens/characters/Colon";
import SColon from "../../tokens/characters/SColon";
import Coma from "../../tokens/characters/Coma";
import Tab from "../../tokens/characters/Tab";
import Space from "../../tokens/characters/Space";
import NewLine from "../../tokens/characters/NewLine";
import LBracket from "../../tokens/characters/LBracket";
import Dot from "../../tokens/characters/Dot";
import RBracket from "../../tokens/characters/RBracket";
import Equals from "../../tokens/characters/Equals";
import DExclamation from "../../tokens/characters/DExclamation";
import NotSection from "../sections/NotSection";
import Token from "../../tokens/Token";

export default class MultiLineCommentParser extends Parser {

}

MultiLineCommentParser.considerSpaces = true;
MultiLineCommentParser.statement = MultiLineComment;


let end = new ParseSection(
    Asterisk,
    ForwardSlash
);

MultiLineCommentParser.sections = [
    new ZeroOrManySections(
        new AlternativeSection(
            Tab,Space,NewLine
        )
    ),
    ForwardSlash,
    Asterisk,
    new ZeroOrManySections(
        new AlternativeSection(
            // test an asterisk but if future  token is forwardSlash return false
            new FailOnSection(
                ...end.sections
            ),
            new NotSection(
                Token,
                Asterisk
            )
        )
    ),
    end
];