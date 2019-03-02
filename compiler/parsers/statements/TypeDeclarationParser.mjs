import Parser from "../Parser";
import TypeDeclaration from "../../ast/statements/TypeDeclaration";
import NotParserSection from "../sections/NotParserSection";
import Identifier from "../../tokens/identifiers/Identifier";
import Keyword from "../../tokens/identifiers/Keyword";
import OptionalParser from "../sections/OptionalParser";
import LessThan from "../../tokens/characters/LessThan";
import GreaterThan from "../../tokens/characters/GreaterThan";
import ZeroOrManyParseSections
    from "../sections/ZeroOrManyParseSections";
import Pipe from "../../tokens/characters/Pipe";
import Coma from "../../tokens/characters/Coma";

export default class TypeDeclarationParser extends Parser {


}

TypeDeclarationParser.statement = TypeDeclaration;

let typeDeclaration = new TypeDeclarationParser;

let zero = new ZeroOrManyParseSections(
    Pipe,
    typeDeclaration
);

zero.errors = [
    undefined, "expecting a type declaration"
];

let zeroOrManyTypeOrders = new ZeroOrManyParseSections(
    Coma,
    typeDeclaration,
    zero
);

zeroOrManyTypeOrders.errors = [undefined
    , "expecting a type declaration"
];

let optional = new OptionalParser(
    LessThan,
    typeDeclaration,
    zero,
    zeroOrManyTypeOrders,
    GreaterThan
);

optional.errors = [undefined, "Expecting at least one type declaration "];

TypeDeclarationParser.sections = [
    new NotParserSection(Identifier, Keyword),
    optional
];


TypeDeclarationParser.errors = [
    "A Keyword can not be a valid type"
];
