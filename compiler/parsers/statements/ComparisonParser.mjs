import Parser from "../Parser";
import OptionalSection from "../sections/OptionalSection";
import InfixOperationParser from "../statements/InfixOperationParser";
import ComparisonStatement from "../../ast/statements/ComparisonStatement";
import ComparisonOperatorParser from "./ComparisonOperatorParser";

export default class ComparisonParser extends Parser{

}


/*
* infixOperation (comparisonOperator infixOperation)?
* */


ComparisonParser.statement  = ComparisonStatement;
let infixOperationParser = new InfixOperationParser;
ComparisonParser.sections = [
    infixOperationParser,
    new OptionalSection(
        new ComparisonOperatorParser,
        infixOperationParser
    )

];