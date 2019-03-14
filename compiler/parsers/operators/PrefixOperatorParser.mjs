import AlternativeSection from "../sections/AlternativeSection";
import RepetitivePlusParser from "./RepetitivePlusParser";
import MinusOperatorParser from "./MinusOperatorParser";
import RepetitiveMinusParser from "./RepetitiveMinusParser";
import PlusOperatorParser from "./PlusOperatorParser";
import NegationOperatorParser from "./NegationOperatorParser";
import {ReferenceParser} from "../Parsers";
import Exclamation from "../../tokens/characters/Exclamation";
import OptionalSection from "../sections/OptionalSection";
import ParseSection from "../sections/ParseSection";

export default class PrefixOperatorParser extends AlternativeSection {
    constructor() {
        let start = new AlternativeSection(
            Exclamation
        );
        super(
            new ParseSection(
                new OptionalSection(start),
                new RepetitivePlusParser
            ),
            new ParseSection(
                new OptionalSection(start),
                new RepetitiveMinusParser
            ),
            new ParseSection(
                new OptionalSection(start),
                new PlusOperatorParser
            ),
            new ParseSection(
                new OptionalSection(start),
                new NegationOperatorParser
            ),
            new ParseSection(
                new OptionalSection(start),
                new MinusOperatorParser
            ),
            new ParseSection(
                new OptionalSection(start),
                new ReferenceParser
            ),
        )
    }
}