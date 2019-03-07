import Parser from "../Parser";
import ZeroOrManySections from "../sections/ZeroOrManySections";
import AlternativeSection from "../sections/AlternativeSection";
import NewLine from "../../tokens/characters/NewLine";
import Space from "../../tokens/characters/Space";
import Tab from "../../tokens/characters/Tab";
import ForwardSlash from "../../tokens/characters/ForwardSlash";

import NotSection from "../sections/NotSection";
import Token from "../../tokens/Token";
import SingleLineComment
    from "../../ast/statements/SingleLineComment";
import OptionalSection from "../sections/OptionalSection";
import Identifier from "../../tokens/identifiers/Identifier";
import Exclamation from "../../tokens/characters/Exclamation";
import At from "../../tokens/characters/At";
import Hash from "../../tokens/characters/Hash";
import SqLine from "../../tokens/characters/SqLine";
import BackSlash from "../../tokens/characters/BackSlash";
import SColon from "../../tokens/characters/SColon";
import RSqBracket from "../../tokens/characters/RSqBracket";
import LSqBracket from "../../tokens/characters/LSqBracket";
import DExclamation from "../../tokens/characters/DExclamation";
import Pipe from "../../tokens/characters/Pipe";
import LSBracket from "../../tokens/characters/LSBracket";
import RSBracket from "../../tokens/characters/RSBracket";
import Coma from "../../tokens/characters/Coma";
import LBracket from "../../tokens/characters/LBracket";
import RBracket from "../../tokens/characters/RBracket";
import Colon from "../../tokens/characters/Colon";

export default class SingleLineCommentParser extends Parser {
}

SingleLineCommentParser.considerSpaces = true;
SingleLineCommentParser.statement = SingleLineComment;
SingleLineCommentParser.sections = [
    new ZeroOrManySections(
        new AlternativeSection(
            Tab, Space, NewLine
        )
    ),
    ForwardSlash,
    ForwardSlash,
    new ZeroOrManySections(
       new AlternativeSection(
          new NotSection(Token,NewLine)
       )
    ),
    new OptionalSection(NewLine)
];