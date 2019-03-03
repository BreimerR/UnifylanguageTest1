import Parser from "../Parser";
import BackSlash from "../../tokens/characters/BackSlash";
import AlternativeSection
    from "../sections/AlternativeSection";
import DExclamation from "../../tokens/characters/DExclamation";
import SingleExclamation
    from "../../tokens/characters/SingleExclamation";
import EscapeCharacter from "../../ast/statements/EscapeCharacter";

export default class EscapeCharacterParser extends Parser {

}

EscapeCharacterParser.statement = EscapeCharacter;
EscapeCharacterParser.sections = [
    BackSlash,
    new AlternativeSection(
        DExclamation,
        SingleExclamation
    )
];