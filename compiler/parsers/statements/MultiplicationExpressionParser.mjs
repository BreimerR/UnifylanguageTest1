import Parser from "../Parser";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import AsExpressionParser from "../notSure/AsExpressionParser";
import MultiplicationExpression
    from "../../ast/statements/MultiplicationExpression";
import MultiplicativeOperatorParser
    from "./MultiplicativeOperatorParser";

export default class MultiplicationExpressionParser extends Parser {
}

MultiplicationExpressionParser.statement = MultiplicationExpression;

/*
*  asExpression (multiplicativeOperator asExpression)*
* */
MultiplicationExpressionParser.sections = [
    new RepetitiveBySection(
        new MultiplicativeOperatorParser,
        new AsExpressionParser
    )
];