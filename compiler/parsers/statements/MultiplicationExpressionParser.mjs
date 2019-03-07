import Parser from "../Parser";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import AsExpressionParser from "../statements/AsExpressionParser";
import Asterisk from "../../tokens/characters/Asterisk";
import AlternativeSection from "../sections/AlternativeSection";
import ForwardSlash from "../../tokens/characters/ForwardSlash";
import Percent from "../../tokens/characters/Percent";
import MultiplicationExpression
    from "../../ast/statements/MultiplicationExpression";

export default class MultiplicationExpressionParser extends Parser {
}

MultiplicationExpressionParser.statement = MultiplicationExpression;

/*
*  asExpression (multiplicativeOperator asExpression)*
* */
MultiplicationExpressionParser.sections = [
    new RepetitiveBySection(
        new AlternativeSection(
            Asterisk,
            ForwardSlash,
            Percent
        ),
        new AsExpressionParser
    )
];