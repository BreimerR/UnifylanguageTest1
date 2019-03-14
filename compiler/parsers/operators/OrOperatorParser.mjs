import Parser from "../Parser";
import OrOperator from "../../ast/statements/OrOperator";
import Pipe from "../../tokens/characters/Pipe";

export default class OrOperatorParser extends Parser{

}

OrOperatorParser.statement = OrOperator;
OrOperatorParser.sections = [
    Pipe,
    Pipe
];