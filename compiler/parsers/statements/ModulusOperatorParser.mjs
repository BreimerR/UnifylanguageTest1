import Parser from "../Parser";
import Percent from "../../tokens/characters/Percent";
import ModulusOperator from "../../ast/statements/ModulusOperator";

export default class ModulusOperatorParser extends Parser{}

ModulusOperatorParser.statement =  ModulusOperator;
ModulusOperatorParser.sections = [
    Percent
];