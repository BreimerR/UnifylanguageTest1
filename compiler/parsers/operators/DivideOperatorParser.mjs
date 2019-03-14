import Parser from "../Parser";
import ForwardSlash from "../../tokens/characters/ForwardSlash";
import DivideOperator from "../../ast/statements/DivideOperator";

export default class DivideOperatorParser extends Parser {
}

DivideOperatorParser.statement = DivideOperator;
DivideOperatorParser.sections = [
    ForwardSlash
];