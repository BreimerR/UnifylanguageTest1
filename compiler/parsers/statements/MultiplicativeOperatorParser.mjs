import AlternativeSection from "../sections/AlternativeSection";
import MultiplicationOperatorParser
    from "./MultiplicationOperatorParser";
import DivideOperatorParser from "./DivideOperatorParser";
import ModulusOperatorParser from "./ModulusOperatorParser";

export default class MultiplicativeOperatorParser extends AlternativeSection {
    constructor() {
        super(
            new MultiplicationOperatorParser,
            new DivideOperatorParser,
            new ModulusOperatorParser
        )
    }
}