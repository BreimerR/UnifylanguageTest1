import Parser from "../Parser";
import NumberLiteral from "../../ast/literals/NumberLiteral";
import UnifyNumber from "../../tokens/characters/UnifyNumber";
import OptionalSection from "../sections/OptionalSection";
import Dot from "../../tokens/characters/Dot";
import ParseSection from "../sections/ParseSection";
import AlternativeSection from "../sections/AlternativeSection";

export default class NumberParser extends Parser {

}

NumberParser.statement = NumberLiteral;

let simpleNumber = new ParseSection(
    UnifyNumber,
    new OptionalSection(
        Dot,
        UnifyNumber
    ),
    new OptionalSection(
        new AlternativeSection(
            "E",
            "B",
            "b",
            new ParseSection(
                "m","b"
            ),
            new ParseSection(
                "g","b"
            ),
        )
    )
);

NumberParser.sections = [
    simpleNumber,
    new OptionalSection(
        "e",
        simpleNumber
    )
];