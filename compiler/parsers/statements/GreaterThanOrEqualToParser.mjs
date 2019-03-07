import Parser from "../Parser";
import GreaterThanOrEqualTo
    from "../../ast/statements/GreaterThanOrEqualTo";
import GreaterThan from "../../tokens/characters/GreaterThan";
import Equals from "../../tokens/characters/Equals";

export default class GreaterThanOrEqualToParser extends Parser {
}

GreaterThanOrEqualToParser.statement = GreaterThanOrEqualTo;

GreaterThanOrEqualToParser.sections = [
    GreaterThan,
    Equals
];