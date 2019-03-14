import Parser from "../Parser";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import ParseSection from "../sections/ParseSection";
import AdditiveExpressionParser
    from "../statements/AdditiveExpressionParser";
import Dot from "../../tokens/characters/Dot";
import RangeExpression from "../../ast/statements/RangeExpression";

export  class RangeExpressionParser extends Parser {
}

RangeExpressionParser.statement = RangeExpression;

/*
*  additiveExpression ('..' additiveExpression)*
* */
RangeExpressionParser.sections = [
    new RepetitiveBySection(
        new ParseSection(
            Dot, Dot
        ),
        new AdditiveExpressionParser
    )
];
