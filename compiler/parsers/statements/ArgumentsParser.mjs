import Parser from "../Parser";
import ArgumentsList
    from "../../ast/statements/ArgumentsList";
import LBracket from "../../tokens/characters/LBracket";
import RBracket from "../../tokens/characters/RBracket";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import ArgumentDeclarationParser from "./ArgumentDeclarationParser";
import Coma from "../../tokens/characters/Coma";
import AlternativeSection from "../sections/AlternativeSection";
import ParseSection from "../sections/ParseSection";
import TypeDeclarationParser from "./TypeDeclarationParser";
import Dot from "../../tokens/characters/Dot";
import Identifier from "../../tokens/identifiers/Identifier";
import OptionalSection from "../sections/OptionalSection";
import DelegationParser from "./DelegationParser";

export default class ArgumentsParser extends Parser {
}


ArgumentsParser.statement = ArgumentsList;

let args = new RepetitiveBySection(
    Coma,
    new ArgumentDeclarationParser
);

let varyingArgs = new ParseSection(
    new OptionalSection(
        new TypeDeclarationParser
    ),
    Dot, Dot, Dot, Identifier,
    new OptionalSection(
        new DelegationParser
    )
);

ArgumentsParser.sections = [
    LBracket,
    new AlternativeSection(
        new ParseSection(
            new OptionalSection(varyingArgs), Coma, args
        ),
        new ParseSection(
            args, Coma, new OptionalSection(varyingArgs)
        ),
        varyingArgs,
        args,
    ),
    RBracket
]
;