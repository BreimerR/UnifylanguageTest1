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