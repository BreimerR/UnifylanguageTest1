import Parser from "../Parser"
import DeclarationIdentifier from "../../tokens/DeclarationIdentifier";
import NewLine from "../../tokens/NewLine";
import Equals from "../../tokens/Equals";
import Identifier from "../../tokens/Identifier";
import Statement from  "../tokens/Statement"


export default class VariableParser extends Parser {
    constructor(...args) {
        super(...args)
    }

    parse() {

    }
}

// chained path of tests
VariableParser.tests = [
    [
        Identifier,
        Identifier,

    ],
    [
        DeclarationIdentifier,
        Equals,
        Statement
    ]
];


