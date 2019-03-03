import Parser from "../Parser";
import NumberLiteral from "../../ast/literals/NumberLiteral";
import UnifyNumber from "../../tokens/characters/UnifyNumber";
import OptionalSection from "../sections/OptionalSection";
import Dot from "../../tokens/characters/Dot";
import ParseSection from "../sections/ParseSection";

export default class NumberParser extends Parser {

}

NumberParser.statement = NumberLiteral;

let simpleNumber = new ParseSection(
    UnifyNumber,
    new OptionalSection(
        Dot,
        UnifyNumber
    )
);

NumberParser.sections = [
    simpleNumber,
    new OptionalSection(
        "e",
        simpleNumber
    )
];