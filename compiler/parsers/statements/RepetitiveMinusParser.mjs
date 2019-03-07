import Parser from "../Parser";
import Minus from "../../tokens/characters/Minus";
import RepetitiveMinus from "../../ast/statements/RepetitiveMinus";

export default class RepetitiveMinusParser extends Parser{

}

RepetitiveMinusParser.statement = RepetitiveMinus;
RepetitiveMinusParser.sections = [
    Minus,
    Minus
];