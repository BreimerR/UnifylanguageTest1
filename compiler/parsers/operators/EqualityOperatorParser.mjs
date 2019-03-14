import AlternativeSection from "../sections/AlternativeSection";
import NotEqualsParser from "./NotEqualsParser";
import EqualsParser from "./EqualsParser";
import ExactlyEqualsParser from "./ExactlyEqualsParser";
import NotExactlyEqualsParser from "./NotExactlyEqualsParser";
import LessThanOrEqualToParser from "./LessThanOrEqualToParser";
import GreaterThanOrEqualToParser from "./GreaterThanOrEqualToParser";
import GreaterThanParser from "./GreaterThanParser";
import LessThanParser from "./LessThanParser";
import NotEqualParser from "./NotEqualParser";
import EqualsToParser from "../sections/EqualsToParser";

export default class EqualityOperatorParser extends AlternativeSection {
    constructor() {
        super(
            new LessThanOrEqualToParser,
            new GreaterThanOrEqualToParser,
            new GreaterThanParser,
            new LessThanParser,
            new NotEqualParser,
            new ExactlyEqualsParser,
            new EqualsToParser,
            new NotExactlyEqualsParser,
            new NotEqualsParser,
        )
    }
}