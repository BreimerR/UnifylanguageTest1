import Parser from "../Parser";
import InfixFunctionCall
    from "../../ast/statements/InfixFunctionCall";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import RangeExpressionParser from "../statements/RangeExpressionParser";
import Identifier from "../../tokens/identifiers/Identifier";

export default class InfixFunctionCallParser extends  Parser{}


InfixFunctionCallParser.statement = InfixFunctionCall;


/*
* rangeExpression (simpleIdentifier rangeExpression)*
* */
InfixFunctionCallParser.sections = [
    new RepetitiveBySection(
        Identifier,
        new RangeExpressionParser
    )
];