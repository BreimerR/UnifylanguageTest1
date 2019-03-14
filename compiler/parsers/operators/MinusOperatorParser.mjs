import Parser from "../Parser";
import MinusOperator from "../../ast/statements/MinusOperator";
import Minus from "../../tokens/characters/Minus";

export default class MinusOperatorParser extends Parser {

}

MinusOperatorParser.statement = MinusOperator;

MinusOperatorParser.sections = [
    Minus
];