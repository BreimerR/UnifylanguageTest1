import Parser from "../Parser";
import AlternativeSection from "../sections/AlternativeSection";
import ParseSection from "../sections/ParseSection";
import Plus from "../../tokens/characters/Plus";
import Minus from "../../tokens/characters/Minus";
import Exclamation from "../../tokens/characters/Exclamation";
import PrefixUnaryExpression
    from "../../ast/statements/PrefixUnaryExpression";

export default class PrefixUnaryExpressionParser extends Parser {
}

PrefixUnaryExpressionParser.statement = PrefixUnaryExpression;

PrefixUnaryExpressionParser.sections = [
    // TODO add prefix function here
    new AlternativeSection(
        new ParseSection(Plus, Plus),
        new ParseSection(Minus, Minus),
        Minus,
        Plus,
        Exclamation,
    )
];