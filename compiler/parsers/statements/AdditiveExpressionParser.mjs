import Parser from "../Parser";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import MultiplicationExpressionParser
    from "../statements/MultiplicationExpressionParser";
import AlternativeSection from "../sections/AlternativeSection";
import Plus from "../../tokens/characters/Plus";
import Minus from "../../tokens/characters/Minus";
import AdditiveExpression
    from "../../ast/statements/AdditiveExpression";

export default class AdditiveExpressionParser extends Parser {
}

AdditiveExpressionParser.statement = AdditiveExpression;

/*
*  multiplicativeExpression (additiveOperator multiplicativeExpression)*
* */
AdditiveExpressionParser.sections = [
    new RepetitiveBySection(
        new AlternativeSection(
            Plus,
            Minus
        ),
        new MultiplicationExpressionParser
    )
];