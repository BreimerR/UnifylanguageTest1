import Parser from "../Parser";
import Identifier from "../../tokens/identifiers/Identifier";
import OptionalSection from "../sections/OptionalSection";
import ClassDeclaration from "../../ast/statements/ClassDeclaration";
import TypeDeclarationParser from "./TypeDeclarationParser";
import ClassExtensionParser from "./ClassExtensionParser";
import AbstractionImplementationParser
    from "./AbstractionImplementationParser";
import ClassBodyParser from "./ClassBodyParser";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import Coma from "../../tokens/characters/Coma";
import ArgumentDeclarationParser from "./ArgumentDeclarationParser";
import PropertyStartParser from "../sections/PropertyStartParser";
import LBracket from "../../tokens/characters/LBracket";
import RBracket from "../../tokens/characters/RBracket";
import ParseSection from "../sections/ParseSection";
import Dot from "../../tokens/characters/Dot";
import DelegationParser from "./DelegationParser";
import AlternativeSection from "../sections/AlternativeSection";
import Pipe from "../../tokens/characters/Pipe";

export default class ClassParser extends Parser {

}


ClassParser.statement = ClassDeclaration;

let varyingArgs = new ParseSection(
    new OptionalSection(
        new PropertyStartParser
    ),
    new RepetitiveBySection(
        Pipe,
        new TypeDeclarationParser,
    ),
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

ClassParser.sections = [
    new OptionalSection(
        "closed"
    ),
    "class",
    new TypeDeclarationParser,
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
    new OptionalSection(
        new ClassExtensionParser,
    ),
    new OptionalSection(
        // covers interfaces and  abstract classes
        new AbstractionImplementationParser
    ),
    new OptionalSection(
        new ClassBodyParser
    )
];