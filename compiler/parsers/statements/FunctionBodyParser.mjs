import Parser from "../Parser";
import LSqBracket from "../../tokens/characters/LSqBracket";
import RSqBracket from "../../tokens/characters/RSqBracket";
import FunctionBody from "../../ast/statements/FunctionBody";

export default class FunctionBodyParser extends Parser {

}

FunctionBodyParser.statement = FunctionBody;

FunctionBodyParser.sections = [
    LSqBracket,

    RSqBracket
];