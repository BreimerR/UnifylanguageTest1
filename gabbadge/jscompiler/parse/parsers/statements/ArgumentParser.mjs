import Parser from "../Parser";
import {log} from "../../../../language/helpers";
import UnexpectedToken from "../../exceptions/UnexpectedToken";
import LBracket from "../../tokens/LBracket";
import Identifier from "../../tokens/Identifier";
import Exclamation from "../../tokens/Exclamation";
import Dot from "../../tokens/Dot";
import LSBracket from "../../tokens/LSBracket";
import LSqBracket from "../../tokens/LSqBracket";
import RBracket from "../../tokens/RBracket";
import DeclarationIdentifier from "../../tokens/DeclarationIdentifier";
import Coma from "../../tokens/Coma";
import RSqBracket from "../../tokens/RSqBracket";


export class Variable extends Parser {
    constructor() {
        super();
        this.name = undefined;
        this.type = "Any"
    }
}

export class Argument extends Parser {

}

Argument.tests = [
    Identifier,
    {optional: Identifier}
];

Argument.considerSpaces = false;

export class OrArgument extends Argument {

}

export class ArrayArg extends Argument {

}

ArrayArg.tests = [
    {optional: Identifier},
    Dot,
    Dot,
    Dot,
    Identifier
];

export class DestructingArg extends Argument {
    constructor() {
        super();
        this.parsers = [Argument]
    }
}

DestructingArg.test = [
    RSqBracket,
];

export default class ArgumentParser extends Parser {
    constructor() {
        super();

        this.args = [];
        this.parsers = []
    }

    parse() {
        let lang = this.lang, cT;

        while (lang.nextToken) {
            cT = lang.cT;
            if (cT.is(RBracket)) break;


            this.args.push(this.parseArg);
        }
    }

    parseArg() {
        let cT = this.currentToken;

        if (cT.is(Identifier)) {

        } else if (cT.is(Dot)) {

        } else if (cT.is(LBracket)) {

        }
        else if (cT.is(LSqBracket)) {

        }
        return true;
    }
}

ArgumentParser.tests = [
    LBracket,
    [DeclarationIdentifier, Identifier, Dot, Exclamation, LSBracket, LSqBracket]
];

ArgumentParser.parseTests = [
    LBracket,
    {
        oneOrMany: {}
    },
    RBracket
];
ArgumentParser.considerSpaces = false;