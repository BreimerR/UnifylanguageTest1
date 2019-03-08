import Parser from "../Parser";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import EqualityParser from "../statements/EqualityParser";
import Conjunction from "../../ast/statements/Conjunction"
import And from "../../tokens/characters/And";
import ParseSection from "../sections/ParseSection";
import AndOperatorParser from "../operators/AndOperatorParser";

export default class ConjunctionParser extends Parser {

}

ConjunctionParser.statement = Conjunction;

ConjunctionParser.sections = [
    new RepetitiveBySection(
        new AndOperatorParser,
        new EqualityParser
    )
];