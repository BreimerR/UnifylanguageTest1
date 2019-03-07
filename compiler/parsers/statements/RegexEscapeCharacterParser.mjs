import Parser from "../Parser";
import BackSlash from "../../tokens/characters/BackSlash";
import AlternativeSection from "../sections/AlternativeSection";
import ForwardSlash from "../../tokens/characters/ForwardSlash";
import Dollar from "../../tokens/characters/Dollar";
import UCaret from "../../tokens/characters/UCaret";
import LessThan from "../../tokens/characters/LessThan";
import RegexEscapeCharacter
    from "../../ast/statements/RegexEscapeCharacter";

export default class RegexEscapeCharacterParser extends Parser{}

RegexEscapeCharacterParser.statement =  RegexEscapeCharacter;

/*let regex = /\$\.\,\`\@\#<>/;*/
RegexEscapeCharacterParser.sections = [
    BackSlash,
    new AlternativeSection(
        ForwardSlash,
        Dollar,
        UCaret,
        //DCaret
        LessThan
    )
];