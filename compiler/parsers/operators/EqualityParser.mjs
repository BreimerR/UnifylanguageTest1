import Parser from "../Parser";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import EqualityStatement from "../../ast/statements/EqualityStatement";
import EqualityOperatorParser from "./EqualityOperatorParser";
import LessThanOrEqualToParser from "./LessThanOrEqualToParser";
import GreaterThanOrEqualToParser from "./GreaterThanOrEqualToParser";
import GreaterThanParser from "./GreaterThanParser";
import LessThanParser from "./LessThanParser";

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
        new LessThanOrEqualToParser,
        new GreaterThanOrEqualToParser,
        new EqualityOperatorParser,
        new GreaterThanParser,
        new LessThanParser,
    )
];