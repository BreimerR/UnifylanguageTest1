import Parser from "../Parser";
import AlternativeSection from "../sections/AlternativeSection";
import ParseSection from "../sections/ParseSection";
import ComparisonParser from "../statements/ComparisonParser";
import Exclamation from "../../tokens/characters/Exclamation";
import Equals from "../../tokens/characters/Equals";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import EqualityStatement from "../../ast/statements/EqualityStatement";
import EqualityOperatorParser from "./EqualityOperatorParser";

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
        new EqualityOperatorParser,
        new ComparisonParser,
    )
];