import Parser from "../Parser";
import AlternativeSection from "../sections/AlternativeSection";
import AndOperatorParser from "../operators/AndOperatorParser";
import OrOperatorParser from "./OrOperatorParser";
import Identifier from "../../tokens/identifiers/Identifier";
import BinaryOperatorParser from "./BinaryOperatorParser";
import ComparisonOperatorParser from "./ComparisonOperatorParser";
import Equals from "../../tokens/characters/Equals";
import LBracket from "../../tokens/characters/LBracket";
import RBracket from "../../tokens/characters/RBracket";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import Coma from "../../tokens/characters/Coma";
import StringParser from "./StringParser";
import NumberParser from "./NumberParser";
import OneOrManySection from "../sections/OneOrManySection";
import OptionalSection from "../sections/OptionalSection";
import AndParser from "../operators/AndParser";
import ElvisOperatorParser from "./ElvisOperatorParser";
import RepetitiveMinusParser from "./RepetitiveMinusParser";
import RepetitivePlusParser from "./RepetitivePlusParser";
import Exclamation from "../../tokens/characters/Exclamation";
import Plus from "../../tokens/characters/Plus";
import Asterisk from "../../tokens/characters/Asterisk";
import Minus from "../../tokens/characters/Minus";
import Dot from "../../tokens/characters/Dot";
import ParseSection from "../sections/ParseSection";
import RSBracket from "../../tokens/characters/RSBracket";
import LSBracket from "../../tokens/characters/LSBracket";
import Question from "../../tokens/characters/Question";
import Colon from "../../tokens/characters/Colon";

export default class ExpressionParser extends Parser {
}

export class InfixExpressionParser extends Parser {

}

export class InfixOperatorParser extends AlternativeSection {
    constructor() {
        super(
            new AndParser,
            new AndOperatorParser,
            new OrOperatorParser,
            new BinaryOperatorParser,
            new ComparisonOperatorParser,
            new ElvisOperatorParser,
            Identifier,
            Equals
        )
    }
}


export class FunctionCallParser extends Parser {

}

export class ArgumentsPassParser extends Parser {

}

export class GroupExpressionParser extends Parser {
}

export class PrefixExpressionParser extends Parser {
}

export class PrefixOperatorParser extends AlternativeSection {
    constructor() {
        super(
            new RepetitiveMinusParser,
            new RepetitivePlusParser,
            Identifier,
            Asterisk,
            Exclamation,
            Plus,
            Minus
        );
    }

}

export class PostFixOperatorParser extends AlternativeSection {
    constructor() {
        super(
            new RepetitiveMinusParser,
            new RepetitivePlusParser,
        );
    }

}

export class ChainFunctionCallParser extends Parser {
}

export class ReferenceExpressionParser extends Parser {

}

export class PostFixExpressionParser extends Parser {
}

export class UnaryExpressionParser extends Parser {
}

export class ThisReferenceParser extends Parser {

}

ArgumentsPassParser.sections = [
    LBracket,
    new OptionalSection(
        new RepetitiveBySection(
            Coma,
            new AlternativeSection(
                new ExpressionParser,
                new NumberParser,
                new StringParser,
                new ReferenceExpressionParser
            )
        )
    ),
    RBracket
];

GroupExpressionParser.sections = [
    LBracket,
    new ExpressionParser,
    RBracket
];

FunctionCallParser.sections = [
    Identifier,
    new ArgumentsPassParser
];


let expressionStart = new AlternativeSection(
    new FunctionCallParser,
    Identifier,
    new StringParser,
    new NumberParser,
    new GroupExpressionParser
);

InfixExpressionParser.sections = [
    expressionStart,
    new OneOrManySection(
        new InfixOperatorParser,
        new AlternativeSection(
            new ExpressionParser,
            expressionStart
        )
    )
];

PrefixExpressionParser.sections = [
    new PrefixOperatorParser,
    new AlternativeSection(
        new InfixExpressionParser,
        new PrefixExpressionParser,
        new PostFixExpressionParser,
        new FunctionCallParser,
        new NumberParser,
        Identifier,
    )
];

PostFixExpressionParser.sections = [
    expressionStart,
    new PostFixOperatorParser
];

UnaryExpressionParser.sections = [
    new AlternativeSection(
        new InfixExpressionParser,
        new PrefixExpressionParser,
        new PostFixExpressionParser,
        new FunctionCallParser,
        new GroupExpressionParser,
    ),
    Question,
    new ExpressionParser,
    Colon,
    new ExpressionParser
];

ThisReferenceParser.sections = [
    new AlternativeSection(
        "this",
        "self",
        "super"
    ),
    new AlternativeSection(
        new ParseSection(
            Dot,
            new ReferenceExpressionParser
        ),
        new ParseSection(
            LSBracket,
            new ExpressionParser,
            RSBracket
        )
    )
];

ReferenceExpressionParser.sections = [

];

ChainFunctionCallParser.sections = [

];


ExpressionParser.sections = [
    new AlternativeSection(
        new InfixExpressionParser,
        new PrefixExpressionParser,
        new PostFixExpressionParser,
        new FunctionCallParser,
        new UnaryExpressionParser,
        new GroupExpressionParser,
    )
];