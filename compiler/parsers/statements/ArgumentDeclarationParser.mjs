import Parser from "../Parser";
import ArgumentStatement
    from "../../ast/statements/ArgumentStatement";
import Identifier from "../../tokens/identifiers/Identifier";
import ParseSection from "../sections/ParseSection";
import OptionalSection from "../sections/OptionalSection";
import TypeDeclarationParser from "./TypeDeclarationParser";
import GreaterThan from "../../tokens/characters/GreaterThan";
import Equals from "../../tokens/characters/Equals";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import AlternativeSection from "../sections/AlternativeSection";
import VariableDeclarationParser from "./VariableDeclarationParser";
import RBracket from "../../tokens/characters/RBracket";
import LBracket from "../../tokens/characters/LBracket";
import Coma from "../../tokens/characters/Coma";

export default class ArgumentDeclarationParser extends Parser {

}

ArgumentDeclarationParser.statement = ArgumentStatement;


/*
* func(func()=>Int){
*
* }
* */

let functionArgument = new ParseSection(
    Identifier,
    new OptionalSection(
        LBracket,
        new RepetitiveBySection(
            Coma,
            new TypeDeclarationParser
        ),
        RBracket
    ),
    Equals,
    GreaterThan,
    new TypeDeclarationParser
);


ArgumentDeclarationParser.sections = [
    new AlternativeSection(
        functionArgument,
        new VariableDeclarationParser,
    )
];