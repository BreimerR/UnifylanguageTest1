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
        super(
            new RepetitivePlusParser,
            new RepetitiveMinusParser,
            new PlusOperatorParser,
            new NegationOperatorParser,
            new MinusOperatorParser,
            new ReferenceParser,

        )
    }
}