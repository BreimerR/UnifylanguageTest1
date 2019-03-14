import AlternativeSection from "../sections/AlternativeSection";
import AndParser from "./AndParser";
import OrOperatorParser from "./OrOperatorParser";
import EqualityOperatorParser from "./EqualityOperatorParser";

export default class ComparisonOperatorParser extends AlternativeSection {
    constructor() {
        super(
            new EqualityOperatorParser,
            new AndParser,
            new OrOperatorParser
        );
    }

}