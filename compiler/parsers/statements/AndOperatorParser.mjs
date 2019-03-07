import Parser from "../Parser";
import And from "../../tokens/characters/And";
import SingleAndOperator
    from "../../ast/statements/SingleAndOperator";

export default class AndOperatorParser extends Parser {
}

AndOperatorParser.statement = SingleAndOperator;

AndOperatorParser.sections = [
    And
];