import Parser from "../Parser";
import OptionalSection from "../sections/OptionalSection";
import AlternativeSection from "../sections/AlternativeSection";
import ParseSection from "../sections/ParseSection";
import PrefixUnaryExpressionParser
    from "../statements/PrefixUnaryExpressionParser";
import Question from "../../tokens/characters/Question";
import TypeDeclarationParser from "./TypeDeclarationParser";
import AsExpression from "../../ast/statements/AsExpression";

export default class AsExpressionParser extends Parser {

}



AsExpressionParser.statement = AsExpression;


/*
*  prefixUnaryExpression (asOperator type)?
* */
AsExpressionParser.sections = [
    new PrefixUnaryExpressionParser,
    new OptionalSection(
        new AlternativeSection(
            'as',
            new ParseSection('as', Question)
        ),
        new TypeDeclarationParser
    )
];