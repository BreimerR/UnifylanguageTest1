import AlternativeSection from "../sections/AlternativeSection";
import EqualsToParser from "../sections/EqualsToParser";
import LessThanOrEqualToParser from "./LessThanOrEqualToParser";
import GreaterThanOrEqualToParser from "./GreaterThanOrEqualToParser";
import GreaterThanParser from "./GreaterThanParser";
import LessThanParser from "./LessThanParser";
import NotEqualParser from "./NotEqualParser";

export default class ComparisonOperatorParser extends AlternativeSection {
    constructor() {
        super(
            new EqualsToParser,
            new LessThanOrEqualToParser,
            new GreaterThanOrEqualToParser,
            new GreaterThanParser,
            new LessThanParser,
            new NotEqualParser,

        );
    }

}