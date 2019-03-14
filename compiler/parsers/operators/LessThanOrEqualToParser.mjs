import Parser from "../Parser";
import LessThan from "../../tokens/characters/LessThan";
import Equals from "../../tokens/characters/Equals";
import LessThanOrEqualTo
    from "../../ast/statements/LessThanOrEqualTo";

export default class LessThanOrEqualToParser extends Parser {

}

LessThanOrEqualToParser.statement = LessThanOrEqualTo;
LessThanOrEqualToParser.sections = [
    LessThan,
    Equals
];