import AlternativeSection from "../sections/AlternativeSection";
import PlusOperatorParser from "./PlusOperatorParser";
import MinusOperatorParser from "./MinusOperatorParser";
import AndOperatorParser from "../operators/AndOperatorParser";
import SquareOperatorParser from "./SquareOperatorParser";
import ModulusOperatorParser from "./ModulusOperatorParser";
import DivideOperatorParser from "./DivideOperatorParser";
import MultiplicationOperatorParser
    from "./MultiplicationOperatorParser";

export default class BinaryOperatorParser extends AlternativeSection {
    constructor() {
        super(
            new PlusOperatorParser,
            new MinusOperatorParser,
            new DivideOperatorParser,
            new ModulusOperatorParser,
            new SquareOperatorParser,
            new MultiplicationOperatorParser,
            new AndOperatorParser,
        );
    }

}