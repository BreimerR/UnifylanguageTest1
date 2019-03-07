import Parser from "../Parser";
import Expression from "../../ast/statements/Expression";
import AlternativeSection from "../sections/AlternativeSection";
import OrOperatorParser from "./OrOperatorParser";
import AndParser from "./AndParser";
import Question from "../../tokens/characters/Question";
import Colon from "../../tokens/characters/Colon";
import ElvisOperatorParser from "./ElvisOperatorParser";
import NumberParser from "./NumberParser";
import StringParser from "./StringParser";
import BinaryOperatorParser from "./BinaryOperatorParser";
import RBracket from "../../tokens/characters/RBracket";
import LBracket from "../../tokens/characters/LBracket";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import Coma from "../../tokens/characters/Coma";


export class OrExpressionParser extends Parser {

}

export class AndExpressionParser extends Parser {

}

export class BinaryExpressionParser extends Parser {

}

export class UrnaryExpressionParser extends Parser {

}

export class ElvisExpressionParser extends Parser {

}

export class GroupParser extends Parser {

}

// simpleReference
// name argumentsDeclaration? (. simpleReference)*
export class ReferenceParser extends Parser {
}


export default class ExpressionParser extends Parser {

}

export class ArgumentsParser extends Parser {

}


/*
* (age.getAge().getTime).shape || Age
*
*
*
*
*
* */

OrExpressionParser.sections = [
    new Expression,
    new OrOperatorParser,
    new Expression

];

AndExpressionParser.sections = [
    new Expression,
    new AndParser,
    new Expression
];

UrnaryExpressionParser.sections = [
    new Expression,
    Question,
    new Expression,
    Colon,
    new Expression
];

ElvisExpressionParser.sections = [
    new Expression,
    new ElvisOperatorParser,
    new Expression
];

GroupParser.sections = [
    LBracket,
    new Expression,
    RBracket
];

BinaryExpressionParser.sections = [
    new Expression,
    new BinaryOperatorParser,
    new Expression
];

ReferenceParser.sections = [
    LBracket,
    new RepetitiveBySection(
        Coma,
        new Expression
    ),
    RBracket
];


ExpressionParser.statement = Expression;

ExpressionParser.sections = [
    new AlternativeSection(
        new NumberParser,
        new StringParser,
    )
];