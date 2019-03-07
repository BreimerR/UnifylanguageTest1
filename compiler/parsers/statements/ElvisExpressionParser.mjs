import Parser from "../Parser";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import InfixFunctionCallParser from "./InfixFunctionCallParser";
import ElvisExpression from "../../ast/statements/ElvisExpression";
import ElvisOperatorParser from "./ElvisOperatorParser";

export default class ElvisExpressionParser extends Parser {
}

ElvisExpressionParser.statement = ElvisExpression;

/*
*   infixFunctionCall (elvis infixFunctionCall)*
* */
ElvisExpressionParser.sections = [
    new RepetitiveBySection(
        new ElvisOperatorParser,
        new InfixFunctionCallParser
    )
];