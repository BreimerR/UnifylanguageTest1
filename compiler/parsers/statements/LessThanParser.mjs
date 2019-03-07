import Parser from "../Parser";
import LessThan from "../../tokens/characters/LessThan";
import LessThanOperator from "../../ast/statements/LessThanOperator";

export default class LessThanParser extends Parser{}

LessThanParser.statement = LessThanOperator;

LessThanParser.sections = [LessThan];