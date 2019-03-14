import Parser from "../Parser";
import AlternativeSection from "../sections/AlternativeSection";
import Exclamation from "../../tokens/characters/Exclamation";

export default class NegationOperatorParser extends Parser {

}

NegationOperatorParser.sections = [
    new AlternativeSection(
        Exclamation,
        "not",
        "isNot"
    )
];