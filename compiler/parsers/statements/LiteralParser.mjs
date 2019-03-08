import AlternativeSection from "../sections/AlternativeSection";
import NumberParser from "./NumberParser";
import StringLiteral from "../../ast/literals/StringLiteral";

export default class LiteralParser extends AlternativeSection{
    constructor() {
        super(
            new NumberParser,
            new StringLiteral,
            //new ArrayParser
        );

    }

}