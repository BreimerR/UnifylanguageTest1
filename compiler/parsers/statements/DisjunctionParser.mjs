import Parser from "../Parser";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import ParseSection from "../sections/ParseSection";
import Disjunction from '../../ast/statements/Disjunction';
import ConjunctionParser from "../statements/ConjunctionParser";
import Pipe from "../../tokens/characters/Pipe";
import OrOperatorParser from "./OrOperatorParser";

export default class DisjunctionParser extends Parser {

}

DisjunctionParser.statement = Disjunction;

DisjunctionParser.sections = [
    new RepetitiveBySection(
        new OrOperatorParser,
        new ConjunctionParser
    )
];