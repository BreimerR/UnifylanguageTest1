import AlternativeSection from "../sections/AlternativeSection";
import SimpleIdentifierParser
    from "../statements/SimpleIdentifierParser";
import ElvisOperatorParser from "./ElvisOperatorParser";
import PlusOperatorParser from "./PlusOperatorParser";
import MinusOperatorParser from "./MinusOperatorParser";
import SquareOperatorParser from "../statements/SquareOperatorParser";
import MultiplicationOperatorParser
    from "./MultiplicationOperatorParser";
import DivideOperatorParser from "./DivideOperatorParser";
import ModulusOperatorParser from "./ModulusOperatorParser";
import PlusEqualsParser from "./PlusEqualsParser";
import MinusEqualsParser from "./MinusEqualsParser";
import ComparisonOperatorParser from "./ComparisonOperatorParser";
import {ReferenceParser} from "../Parsers";
import Equals from "../../tokens/characters/Equals";

export default class InfixOperatorParser extends AlternativeSection {
    constructor() {
        super(
            new ReferenceParser,
            new ElvisOperatorParser,
            new PlusEqualsParser,
            new ComparisonOperatorParser,
            new MinusEqualsParser,
            new PlusOperatorParser,
            new MinusOperatorParser,
            new SquareOperatorParser,
            new MultiplicationOperatorParser,
            new DivideOperatorParser,
            new ModulusOperatorParser,
            Equals,
        );
    }

}

