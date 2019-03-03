import Parser from "../Parser";
import ArgumentsList
    from "../../ast/statements/ArgumentsList";
import LBracket from "../../tokens/characters/LBracket";
import RBracket from "../../tokens/characters/RBracket";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import ArgumentDeclarationParser from "./ArgumentDeclarationParser";
import Coma from "../../tokens/characters/Coma";

export default class ArgumentsParser extends Parser {
}


ArgumentsParser.statement = ArgumentsList;


ArgumentsParser.sections = [
    LBracket,
    new RepetitiveBySection(
        Coma,
        new ArgumentDeclarationParser
    ),
    RBracket
];