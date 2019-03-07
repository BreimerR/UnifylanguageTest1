import Parser from "../Parser";
import And from "../../tokens/characters/And";
import AndOperator from "../../ast/statements/AndOperator";

export default class AndParser extends Parser {

}

AndParser.statement = AndOperator;

AndParser.sections = [
    And,
    And
];