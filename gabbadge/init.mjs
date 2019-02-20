import {isDefined, log} from "./language/helpers";
import fs from 'fs';
import Splitter from "../language/parsers/Splitter";
import Identifier from "./gabbadge/unify/parse/tokens/Identifier"
import UnexpectedToken from "./gabbadge/unify/parse/exceptions/UnexpectedToken"
import UnExpectedEndOfLine from "./gabbadge/unify/parse/exceptions/UnExpectedEndOfLine"

fs.readFile('unify/examples/Functions.u', 'utf-8', (a, tokens) => {
    if (a) throw new Error(a);

    // remove comments.
    tokens = Splitter.split(tokens.replace(/(\/\*(\*(?!\/)|[^*])*\*\/|\/\/.*)/gi, ""));
    let parser = new Unify(tokens);

    parser.init();


});

class Unify {
    constructor(tokens) {
        this.tokens = tokens
    }

    init() {
        this.parser.parse(this.tokens);
    }


    get parser() {
        return FunctionParser;
    }
}

class Parser {
    constructor(tokens, tree) {
        this.tree = tree;
        this.line = 1;
        this.index = 0;
        this.tokens = tokens;
        this.end = false;
    }

    get nextIdentifier() {
        if (this.nextTokenIsIdentifier) {
            return this.currentToken;
        } else throw new UnexpectedToken(this);
    }

    get currentTokenIsIdentifier() {
        return Identifier.isValid(this.currentToken);
    }

    get nextTokenIsIdentifier() {
        return Identifier.isValid(this.nextToken);
    }

    get safeNextTokenIsIdentifier() {
        return Identifier.isValid(this.safeNextToken);
    }

    get nextToken() {
        if (this.index < this.tokens.length) {
            let token = this.tokens[this.index++];
            if (/\n/.test(token)) {
                this.line += 1;
                return this.nextToken
            }
            return this.currentToken = /[\s\t]/.test(token) ? this.nextToken : token;
        }
        throw new UnExpectedEndOfLine(this)
    }

    get safeNextToken() {
        try {
            return this.nextToken
        } catch (e) {
            return null;
        }
    }

    get prevToken() {
        // reduce from added then remove from current;
        this.index -= 1;
        while (this.index >= 0) {
            let token = this.tokens[--this.index];
            if (/[ \t]/.test(token)) {
            } else if (/\n/.test(token)) {
                this.line -= 1;
            }
            return this.currentToken = token;
        }
    }

    get immediateToken() {
        if (this.index < this.tokens.length) {
            return this.currentToken = this.tokens[this.index++]
        } else throw new UnExpectedEndOfLine(this);
    }


    static parse(tokens, context = null) {
        let parser = new this(tokens, new this.TYPE, context);
        parser.nextToken;
        parser.parse();
    }

    static get TYPE() {
        throw new Error(`Define type for ${this.prototype.constructor.name}`);
    }
}


class FunctionParser extends Parser {
    static get TYPE() {
        return Function;
    }

    parse() {
        if (Identifier.isValid(this.nextToken)) {
            this.tree.name = this.currentToken;
            this.safeNextToken;
            this.sections;
            log("moving to function body");
            this.body;
        } else throw new UnexpectedToken(this.currentToken);
    }

    get body() {

    }

    get getInterfaces() {
        if (Identifier.isValid(this.nextToken)) {
            this.interfaces;
        } else throw new UnexpectedToken(this, 'Interface  function definition');
    }


    get supers() {
        this.tree.supers.push(this.currentToken);

        if (this.safeNextToken === ",") {
            if (this.nextTokenIsIdentifier) {
                this.supers;
            } else throw new UnexpectedToken(this)
        }
    }

    get sections() {
        if (this.currentToken !== null) {
            switch (this.currentToken) {
                case ":":
                    if (this.immediateToken === ":") {
                        this.getInterfaces
                    } else if (Identifier.isValid(this.currentToken) || (/[\s\t\n]/.test(this.currentToken) && Identifier.isValid(this.nextToken))) {
                        this.supers;
                    } else throw new UnexpectedToken(this);
                    this.sections;
                    break;
                case "throws":
                    if (this.nextTokenIsIdentifier) {
                        this.tree.throwable = this.currentToken
                    } else if (/["`']/.test(this.currentToken)) {
                        this.throwable = StringParser.parse(this.tokens.slice(this.index), this.tree)
                    }
                    break;
                case "(":

                    this.arguments;
                    log(this.tree);
                    this.sections
            }


        }
    }

    addArgument(arg) {
        this.tree.arguments.push(arg);
    }

    get args() {
        while (this.nextToken) {
            if (this.currentToken === ")") break;


            if (this.currentTokenIsIdentifier) {
                let tok = this.currentToken;
                if (this.nextTokenIsIdentifier) {
                    let name = this.currentToken;
                    if (this.nextToken === ",") {
                        this.tree.arguments.push(new Variable(name, undefined, tok));
                        continue;
                    } else if (this.currentToken === ")") {
                        break
                    } else if (this.currentToken === "=") {
                        this.defaultVariables(name, tok);
                    }

                    if (this.currentTokenIsIdentifier) {
                        // check function call or object initialization
                        // or also check if the variable exists in the super of this item

                    }

                    if (this.nextToken === ")") {
                        break
                    } else if (this.currentToken === ",") {
                        //continue
                    }
                }
                else if (this.currentToken === "=") {
                }
                else if (this.currentToken === ",") {
                    continue;
                }
                else if (this.currentToken === ":") {
                }
                else if (this.currentToken === ".") {
                }
                else if (this.currentToken === "[") {
                }
            }
            else if (this.currentToken === ".") {
            }
            else if (this.currentToken === "{") {
            }
        }

    }

    defaultVariables(name, type) {
        let cT = this.nextToken;
        if (Tokens.isNumber(cT)) {
            if (this.nextToken === ".") {
                if (Tokens.isNumber(this.nextToken)) {
                    cT += "." + this.currentToken;
                } else throw  new UnexpectedToken(this);
            }
            this.tree.arguments.push(new Variable(name, cT, type))
        } else if (this.currentTokenIsIdentifier) {
            // check if the variable is declared anywhere above this code.
            if (this.nextToken === "(") {
                while (this.nextToken) {
                    if (this.currentToken === ")") break;
                    if (this.currentTokenIsIdentifier) {
                        if (this.nextToken === ",") {


                        } else if (this.currentToken === ")") {
                            break;
                        }
                        else throw new UnexpectedToken(this);
                    } else throw new UnexpectedToken(this);
                }
            } else if (this.currentToken === ",") {

            } else if (this.currentToken === "{") {

            } else if (this.currentToken === "") {

            }
        }
    }

    get interfaces() {
        this.tree.interfaces.push(this.currentToken);

        if (this.safeNextToken === ",") {
            if (Identifier.isValid(this.nextToken)) {
                this.interfaces
            } else throw new UnexpectedToken(this)
        }
    }
}


class StringParser extends Parser {
    parse() {
    }

    static get TYPE() {
        return String;
    }
}

class String {

}

class Tokens {
    static isNumber(token) {
        return /(-+)?[0-9][0-9]*/.test(token)
    }
}

class Function {
    constructor() {
        // name,super,arguments,returnType
        this.arguments = [];
        this.supers = [];
        this.interfaces = [];
        this.throwable = undefined;
        this.variables = [];
    }
}

class Variable {
    constructor(name, value = undefined, type = Object) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
}

class ArrayVariable extends Variable {

}


class StatementParser extends Parser {
    parse() {
        if (this.nextTokenIsIdentifier) {
            if (this.nextToken === "(") {

            } else if (this.currentToken === ".") {

            }
        } else if (this.currentToken === "") {
        }
    }

    static get TYPE() {
        return Statement;
    }
}


class Statement {

}

class FunctionCall extends Statement {
    constructor() {
        super();
        this.arguments = argument;
    }
}