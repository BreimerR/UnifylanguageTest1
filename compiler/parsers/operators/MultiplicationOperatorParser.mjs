import Asterisk from "../../tokens/characters/Asterisk";
import MultiplicationOperator from "../../ast/statements/MultiplicationOperator";
import Parser from "../Parser";

export default class MultiplicationOperatorParser extends Parser{}

MultiplicationOperatorParser.statement =  MultiplicationOperator;
MultiplicationOperatorParser.sections = [
    Asterisk
];