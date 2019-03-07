import ParseSection from "../sections/ParseSection";
import AlternativeSection from "../sections/AlternativeSection";
import RepetitiveMinusParser from "./RepetitiveMinusParser";
import MinusParser from "./MinusParser";
import AdditionParser from "./AdditionParser"
import GreaterThanOrEqualToParser from "./GreaterThanOrEqualToParser"
import GreaterThanParser from "./GreaterThanParser"
import LessThanParser from "./LessThanParser"
import LessThanOrEqualToParser from "./LessThanOrEqualToParser"

export default class OperatorParser extends ParseSection {
    constructor(props) {
        super(
            new AlternativeSection(
                // -
                new MinusParser,
                // +
                new AdditionParser,
            )
        )
        ;

    }

}


OperatorParser.sections = [];