import Parser from "../Parser";
import RegexDeclaration from "../../ast/statements/RegexDeclaration";
import ForwardSlash from "../../tokens/characters/ForwardSlash";
import NotSection from "../sections/NotSection";
import Token from "../../tokens/Token";
import ZeroOrManySections from "../sections/ZeroOrManySections";
import AlternativeSection from "../sections/AlternativeSection";
import RegexEscapeCharacterParser from "./RegexEscapeCharacterParser";
import AlternativeZeroOrMany from "../sections/AlternativeZeroOrMany";
import NewLine from "../../tokens/characters/NewLine";
import Tab from "../../tokens/characters/Tab";
import Space from "../../tokens/characters/Space";

export default class RegexParser extends Parser {

}


RegexParser.considerSpaces = true;
RegexParser.statement = RegexDeclaration;
/*simpleRegex = /breimer\//;*/
RegexParser.sections = [
    new AlternativeZeroOrMany(
        Space, Tab, NewLine
    ),
    ForwardSlash,
    new NotSection(Token, ForwardSlash),
    new ZeroOrManySections(
        new AlternativeSection(
            // avoid \/ being an end
            new RegexEscapeCharacterParser,
            new NotSection(
                Token,
                // we consider spaces but do not use them
                // just for end purposes
                Space,
                Tab,
                NewLine,
                ForwardSlash
            )
        )
    ),
    ForwardSlash
];