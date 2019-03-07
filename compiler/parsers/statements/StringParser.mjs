import Parser from "../Parser";
import StringLiteral from "../../ast/literals/StringLiteral";
import ZeroOrManySections
    from "../sections/ZeroOrManySections";
import AlternativeSection
    from "../sections/AlternativeSection";
import NewLine from "../../tokens/characters/NewLine";
import Tab from "../../tokens/characters/Tab";
import Space from "../../tokens/characters/Space";
import Coma from "../../tokens/characters/Coma";
import DExclamation from "../../tokens/characters/DExclamation";
import EscapeCharacterParser from "./EscapeCharacterParser";
import SingleExclamation
    from "../../tokens/characters/SingleExclamation";
import BackSlash from "../../tokens/characters/BackSlash";
import Identifier from "../../tokens/identifiers/Identifier";
import Dollar from "../../tokens/characters/Dollar";
import Hash from "../../tokens/characters/Hash";
import At from "../../tokens/characters/At";
import Percent from "../../tokens/characters/Percent";
import UnifyNumber from "../../tokens/characters/UnifyNumber";
import {Token} from "../../../language/tokens/Token";
import NotSection from "../sections/NotSection";

export default class StringParser extends Parser {

}


StringParser.considerSpaces = true;
StringParser.statement = StringLiteral;
StringParser.sections = [
    new ZeroOrManySections(
        new AlternativeSection(
            Tab, Space
        )
    ),
    DExclamation,
    new ZeroOrManySections(
        new AlternativeSection(
            new EscapeCharacterParser,
            new NotSection(Token, DExclamation)
        )
    ),
    DExclamation
];

StringParser.errors = {
    2: "Token is not expected inside a string"
};