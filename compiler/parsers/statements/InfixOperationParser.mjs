import Parser from "../Parser";
import ElvisExpressionParser
    from "../statements/ElvisExpressionParser";
import ParseSection from "../sections/ParseSection";
import TypeDeclarationParser from "./TypeDeclarationParser";
import InfixOperation from "../../ast/statements/InfixOperation";
import AlternativeZeroOrMany from "../sections/AlternativeZeroOrMany";

export default class InfixOperationParser extends Parser {
}

InfixOperationParser.statement = InfixOperation;
/*
elvisExpression ((inOperator elvisExpression) | (isOperator type))*
* */


let elvis = new ElvisExpressionParser;

InfixOperationParser.sections = [
    elvis,
    new AlternativeZeroOrMany(
        new ParseSection(
            "in",
            elvis
        ),
        new ParseSection(
            "is",
            new TypeDeclarationParser
        )
    )
];