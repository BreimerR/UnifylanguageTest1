import Parser from "../Parser";
import OptionalSection from "../sections/OptionalSection";
import TypeDeclarationParser from "./TypeDeclarationParser";
import Colon from "../../tokens/characters/Colon";
import Coma from "../../tokens/characters/Coma";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import AbstractClassDeclaration
    from "../../ast/statements/AbstractClassDeclaration";
import AbstractClassBodyParser
    from "./AbstractClassBodyParser";
import NotSection from "../sections/NotSection";
import Identifier from "../../tokens/identifiers/Identifier";
import Keyword from "../../tokens/identifiers/Keyword";
import LBracket from "../../tokens/characters/LBracket";
import AlternativeSection from "../sections/AlternativeSection";
import ParseSection from "../sections/ParseSection";
import RBracket from "../../tokens/characters/RBracket";
import PropertyStartParser from "../sections/PropertyStartParser";
import Dot from "../../tokens/characters/Dot";
import DelegationParser from "./DelegationParser";
import ArgumentDeclarationParser from "./ArgumentDeclarationParser";

export default class AbstractClassParser extends Parser {

}

AbstractClassParser.statement = AbstractClassDeclaration;

let extensions = new RepetitiveBySection(
    Coma,
    new TypeDeclarationParser
);


let varyingArgs = new ParseSection(
    new OptionalSection(
        new PropertyStartParser
    ),
    new TypeDeclarationParser,
    Dot, Dot, Dot, Identifier,
    new OptionalSection(
        new DelegationParser
    )
);

let args = new RepetitiveBySection(
    Coma,
    new ParseSection(
        new OptionalSection(
            new PropertyStartParser
        ),
        new ArgumentDeclarationParser
    )
);

AbstractClassParser.sections = [
    "abstract",
    // name
    new NotSection(Identifier, Keyword),
    new OptionalSection(
        LBracket,
        new AlternativeSection(
            new ParseSection(
                new OptionalSection(varyingArgs),Coma,args
            ),
            new ParseSection(
                args,Coma,new OptionalSection(varyingArgs)
            ),
            varyingArgs,
            args,
        ),
        RBracket
    ),
    // abstract extensions
    new OptionalSection(
        Colon,
        extensions,
    ),
    new OptionalSection(
        new AbstractClassBodyParser
    )
];