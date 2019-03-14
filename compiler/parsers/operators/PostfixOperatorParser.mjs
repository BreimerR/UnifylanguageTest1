import AlternativeSection from "../sections/AlternativeSection";
import RepetitiveMinusParser from "./RepetitiveMinusParser";
import RepetitivePlusParser from "./RepetitivePlusParser";
import SquareOperatorParser from "../statements/SquareOperatorParser";

export default class PostfixOperatorParser extends AlternativeSection {
    constructor() {
        super(
            new SquareOperatorParser,
            new RepetitiveMinusParser,
            new RepetitivePlusParser,
        )
    }
}