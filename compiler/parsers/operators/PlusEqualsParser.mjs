import Parser from "../Parser";
import Equals from "../../tokens/characters/Equals";
import Plus from "../../tokens/characters/Plus";

export default class PlusEqualsParser extends Parser {
}


PlusEqualsParser.sections = [
    Plus,
    Equals
];