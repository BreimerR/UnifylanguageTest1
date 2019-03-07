import Parser from "../Parser";
import TypeDeclaration from "../../ast/statements/TypeDeclaration";
import OptionalSection from "../sections/OptionalSection";
import LessThan from "../../tokens/characters/LessThan";
import GreaterThan from "../../tokens/characters/GreaterThan";
import ZeroOrManySections
    from "../sections/ZeroOrManySections";
import Pipe from "../../tokens/characters/Pipe";
import Coma from "../../tokens/characters/Coma";
import LSBracket from "../../tokens/characters/LSBracket";
import RSBracket from "../../tokens/characters/RSBracket";
import AlternativeSection from "../sections/AlternativeSection";
import UnifyNumber from "../../tokens/characters/UnifyNumber";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import SimpleIdentifierParser from "./SimpleIdentifierParser";

export default class TypeDeclarationParser extends Parser {


}

TypeDeclarationParser.statement = TypeDeclaration;

let typeDeclaration = new TypeDeclarationParser;

let zero = new ZeroOrManySections(
    Pipe,
    typeDeclaration
);

zero.errors = [
    undefined, "expecting a type declaration"
];

let zeroOrManyTypeOrders = new ZeroOrManySections(
    Coma,
    typeDeclaration,
    zero
);

zeroOrManyTypeOrders.errors = [undefined
    , "expecting a type declaration"
];

let optional = new OptionalSection(
    LessThan,
    typeDeclaration,
    zero,
    zeroOrManyTypeOrders,
    GreaterThan
);

optional.errors = [undefined, "Expecting at least one type declaration "];

TypeDeclarationParser.sections = [
    new SimpleIdentifierParser,
    optional,
    new OptionalSection(
        LSBracket,
        new OptionalSection(
            new AlternativeSection(
                // array length
                UnifyNumber,
                // array order
                new RepetitiveBySection(
                    Coma,
                    new TypeDeclarationParser
                )
            )
        ),
        RSBracket
    )
];


TypeDeclarationParser.errors = [
    "A Keyword can not be a valid type"
];
