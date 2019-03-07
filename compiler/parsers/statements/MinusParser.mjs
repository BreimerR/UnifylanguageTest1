import Parser from "../Parser";
import Minus from "../../tokens/characters/Minus";
import MinusOperator from "../../ast/statements/MinusOperator";

export default class MinusParser extends Parser{}


MinusParser.statement = MinusOperator;

MinusParser.sections = [
    Minus
];