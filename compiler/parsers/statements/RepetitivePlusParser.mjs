import Parser from "../Parser";
import Plus from "../../tokens/characters/Plus";
import RepetitivePlus from "../../ast/statements/RepetitivePlus";

export default class RepetitivePlusParser extends Parser {

}

RepetitivePlusParser.statement = RepetitivePlus;
RepetitivePlusParser.sections = [
    Plus,
    Plus
];