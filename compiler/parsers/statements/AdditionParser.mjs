import Parser from "../Parser";
import Plus from "../../tokens/characters/Plus";
import AdditionOperator from "../../ast/statements/AdditionOperator";

export default class AdditionParser extends Parser {
}

AdditionParser.statement = AdditionOperator;

AdditionParser.sections = [
    Plus
];