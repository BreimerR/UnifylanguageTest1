import Parser from "../Parser";
import GreaterThan from "../../tokens/characters/GreaterThan";
import GreaterThanOperator
    from "../../ast/statements/GreaterThanOperator";

export default class GreaterThanParser extends Parser {
}

GreaterThanParser.statement = GreaterThanOperator;
GreaterThanParser.sections = [
    GreaterThan
];