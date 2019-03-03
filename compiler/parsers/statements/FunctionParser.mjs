import Parser from "../Parser";
import FunctionDeclaration
    from "../../ast/statements/FunctionDeclaration";
import FunctionBodyParser from "./FunctionBodyParser";
import NotSection from "../sections/NotSection";
import Identifier from "../../tokens/identifiers/Identifier";
import Keyword from "../../tokens/identifiers/Keyword";
import OptionalSection from "../sections/OptionalSection";
import ArgumentsParser from "./ArgumentsParser";

export default class FunctionParser extends Parser {

}

FunctionParser.statement = FunctionDeclaration;
FunctionParser.sections = [
    new NotSection(Identifier, Keyword),
    new OptionalSection(
        new ArgumentsParser
    ),
    new FunctionBodyParser
];