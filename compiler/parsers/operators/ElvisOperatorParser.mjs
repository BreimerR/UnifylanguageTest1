import Parser from "../Parser";
import Question from "../../tokens/characters/Question";
import Colon from "../../tokens/characters/Colon";
import ElvisOperator from "../../ast/statements/ElvisOperator";

export default class ElvisOperatorParser extends Parser {
}

ElvisOperatorParser.statement = ElvisOperator;

ElvisOperatorParser.sections = [
    Question,
    Colon
];