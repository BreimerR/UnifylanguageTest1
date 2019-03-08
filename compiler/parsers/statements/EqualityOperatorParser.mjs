import AlternativeSection from "../sections/AlternativeSection";
import NotEqualsParser from "./NotEqualsParser";
import EqualsParser from "./EqualsParser";
import ExactlyEqualsParser from "./ExactlyEqualsParser";
import NotExactlyEqualsParser from "./NotExactlyEqualsParser";

export default class EqualityOperatorParser extends AlternativeSection {
    constructor() {
        super(
            new NotEqualsParser,
            new NotExactlyEqualsParser,
            new ExactlyEqualsParser,
            new EqualsParser
        )
    }
}