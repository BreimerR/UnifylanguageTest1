import Parser from "../Parser";
import LSBracket from "../../tokens/characters/LSBracket";
import RSBracket from "../../tokens/characters/RSBracket";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import Coma from "../../tokens/characters/Coma";
import ExpressionParser from "./ExpressionParser"
import ZeroOrManySections from "../sections/ZeroOrManySections";
import ArrayDeclaration from "../../ast/statements/ArrayDeclaration";


export default class ArrayParser extends Parser {

}

ArrayParser.statement = ArrayDeclaration;

/*
* [1 "",a.length 3]
*
* [1,2,3,4]
* []
*
* */
ArrayParser.sections = [
    LSBracket,
    new RepetitiveBySection(
        Coma,
        new ZeroOrManySections(
            new ExpressionParser,
            new LiteralParser
        )
    ),
    RSBracket
];