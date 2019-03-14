import Parser from "../Parser";
import Plus from "../../tokens/characters/Plus";
import PlusOperator from "../../ast/statements/PlusOperator";

export default class PlusOperatorParser extends Parser{}

PlusOperatorParser.statement = PlusOperator;
PlusOperatorParser.sections = [
    Plus
];