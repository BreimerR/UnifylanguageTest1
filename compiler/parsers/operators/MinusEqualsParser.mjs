import Parser from "../Parser";
import Minus from "../../tokens/characters/Minus";
import Equals from "../../tokens/characters/Equals";

export default class MinusEqualsParser extends Parser {
}

MinusEqualsParser.sections = [
    Minus,
    Equals
];