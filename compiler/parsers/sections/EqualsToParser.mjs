import Parser from "../Parser";
import EqualsToOperator from "../../ast/statements/EqualsToOperator";
import Equals from "../../tokens/characters/Equals";

export default class EqualsToParser extends Parser{

}

EqualsToParser.statement =  EqualsToOperator;

EqualsToParser.sections = [
    Equals,
    Equals
];