import Parser from "../Parser";
import AlternativeSection from "../sections/AlternativeSection";
import ParseSection from "../sections/ParseSection";
import ComparisonParser from "../statements/ComparisonParser";
import Exclamation from "../../tokens/characters/Exclamation";
import Equals from "../../tokens/characters/Equals";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import EqualityStatement from "../../ast/statements/EqualityStatement";

export default class EqualityParser extends Parser {
}


/*
  | '!='
  | '!=='
  | '=='
  | '==='
*/

EqualityParser.statement = EqualityStatement;
EqualityParser.sections = [
    new RepetitiveBySection(
        new AlternativeSection(
            new ParseSection(
                Exclamation,
                Equals
            ),
            new ParseSection(
                Exclamation,
                Equals,
                Equals
            ),
            new ParseSection(
                Equals,
                Equals
            ),
            new ParseSection(
                Equals,
                Equals,
                Equals
            )
        ),
        new ComparisonParser,
    )
];