import AlternativeSection from "../sections/AlternativeSection";
import NumberParser from "./NumberParser";
import StringParser from "./StringParser";
import ArrayParser from "./ArrayParser";

export default class LiteralParser extends AlternativeSection {
    constructor() {
        super(
            new NumberParser,
            new StringParser,
            new ArrayParser
        );

    }

}