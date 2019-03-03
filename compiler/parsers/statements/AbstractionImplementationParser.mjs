import Parser from "../Parser";
import AbstractionImplementation
    from "../../ast/statements/AbstractionImplementation";
import Colon from "../../tokens/characters/Colon";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import TypeDeclarationParser from "./TypeDeclarationParser";
import Coma from "../../tokens/characters/Coma";
import AlternativeSection from "../sections/AlternativeSection";
import ParseSection from "../sections/ParseSection";

export default class AbstractionImplementationParser extends Parser {
}


AbstractionImplementationParser.statement = AbstractionImplementation;

AbstractionImplementationParser.sections = [
   new AlternativeSection(
       new ParseSection(
           Colon,
           Colon
       ),
       "implements"
   ),
    new RepetitiveBySection(
        Coma,
        new TypeDeclarationParser
    )
];