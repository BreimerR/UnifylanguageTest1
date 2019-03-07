import Parser from "../Parser";
import UCaret from "../../tokens/characters/UCaret";
import AlternativeSection from "../sections/AlternativeSection";

export default class SquareOperatorParser extends Parser {

}

SquareOperatorParser.sections = [
    new AlternativeSection(
        UCaret
        // **
    )
];