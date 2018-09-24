import fs from 'fs';
import Splitter from "../../language/lexer/Spliter";
import UnExpectedEndOfLine from "./exceptions/UnExpectedEndOfLine";
import {checkType, isDefined, log} from "../../language/helpers";
import Identifier from "./parsers/Identifier";
import Keyword from "./parsers/Keyword";
import UnexpectedToken from "./exceptions/UnexpectedToken";
import UnexpectedKeywordUsed from "./exceptions/UnexpectedKeywordUsed";


export class UnifyParser {
    constructor(directory) {
        // skip states
        this.skipNewLine = false;
        this.skipSpaces = false;
        this.skipTabs = false;
        this.tokens = Splitter.split(fs.readFileSync(`${directory}.u`, `UTF-8`).replace(/(\/\*(\*(?!\/)|[^*])*\*\/|\/\/.*)/gi, ""));
        this.index = 0;
        this.line = 1;
        this.tree = [];
        this.oTokens = [];
        let fileName;
        fileName = (fileName = directory.split("/"))[fileName.length - 1].split(".")[0];
        if (this.tokens) {
            this.cT = this.tokens[0];
            this.parse
        }

    }

    get currentToken() {
        return this.cT;
    }


    // organize tokens to proper orders
    get organize() {
        let i = 0, cT;
        while (isDefined(cT = this.tokens[i++])) {
            if (Identifier.isValid(cT)) {
                this.oTokens.push(new Identifier(cT))
            }
        }
    }

    get parse() {

        do {
            if (this.cT === "(") {
                log(this.argumentList)
            }
        } while (this.safeNextToken) ;
        return this.tree;
    }

    atNext(regex) {
        return regex.test(this.nextToken);
    }

    nextIdentifier(error = "identifier") {
        if (this.atNext(Identifier.regex)) return this.cT;

        throw new UnexpectedToken(this, `${error} found ${this.cT}`);
    }

    nextNonKeyWordIdentifier(error = "identifier") {
        if (this.nextIdentifier(error) && this.at(Keyword.regex)) {
            throw new UnexpectedToken(this, `${error} found reserved keyword "${this.cT}"`);
        }

        return this.cT;
    }

    get parseClass() {
        this.nextNonKeyWordIdentifier("class name");
        let klass = new Class(this.cT);
        this.parseClassExtensions(klass);
        if (this.cT === "{") {
            this.parseClassBody(klass);
            if (this.cT === "}") {

            } else throw new UnexpectedToken(this, `class body close "}"`)
        }

        this.tree.push(klass);

        log(klass);
    }

    parseClassExtensions(klass) {
        while (this.safeNextToken) {
            if (this.currentTokenIsIdentifier) {
                /*  if (this.at(/^throws$/)) {
                      this.parseThrownClassExceptions(klass)
                  }
                  else*/
                if (this.at(/^use$/)) {
                    this.addExtension("Trait", klass);
                }
                else {
                    if (klass.hasInterfaces) {
                        throw new UnexpectedToken(this, ` class body {}.\n Classes with interfaces must implement their bodies as required`)
                    }
                    // go back
                    this.prevToken;
                    //exit extensions check
                    break
                }
            }
            else if (this.cT === "{") {
                break
            }
            else if (this.cT === ";") {
                // check if the klass has any templates
                if (klass.hasTemplates) {
                    throw new UnexpectedToken(this, `token "{". \nclass implementing interfaces should have a class body at all times implementing the required methods`)
                }
                // then parse the templates
                break
            }
            else if (this.cT === ":") {
                if (this.immediateToken === ":") {
                    if (!klass.hasInterfaces) {
                        this.addExtension("Interface", klass);
                    } else {
                        throw new UnexpectedToken(this, `Class interfaces already defined`)
                    }
                } else if (this.currentTokenIsIdentifier || (this.at(/(\s|\n|\t)/) && this.nextIdentifier("class name"))) {
                    if (klass.super === undefined) {
                        klass.super = this.cT;
                    } else throw new UnexpectedToken(this, `" :"or "{"  or ";" as class already has a supper class and this can not have two`);
                } else {
                    log(this.cT, "cadcadac")
                }

            }
        }
    }

    addExtension(name, klass) {
        while (this.nextIdentifier(`${name} name(identifier)`)) {
            klass[`add${name}`](this.cT);
            if (this.safeNextToken !== ",") {
                this.prevToken;
                break
            }
        }
    }


    parseThrownClassExceptions(klass) {

    }

    get parseClassTemplates() {
        this.nextIdentifier("Expecting defined trait or interface of abstract class identifier");

        if (this.nextToken === ",") {
            this.parseClassTemplates
        }
    }


    get parseThrowerSection() {
        if (this.atNext(/"/)) {
            this.parseString;
        } else if (this.currentTokenIsIdentifier) {
            /// add the error to the current class or current function or method;
            log("processing class thrower")
        } else throw new UnexpectedToken(this)
    }

    getImmediate(token) {
        if (this.immediateToken === token) {
            return token;
        }

        throw new UnexpectedToken(this);
    }

    getNextToken(token) {
        if (this.nextToken === token) {
            return token;
        } else throw new UnexpectedToken(this);
    }


    get currentTokenIsIdentifier() {
        return this.at(Identifier.regex);
    }

    get currentTokenIsIntegerLiteral() {
        return this.at(/([+\-])?[0-9][0-9]*/);
    }

    get futureTokenIsIntegerLiteral() {
        return /([+\-])?[0-9][0-9]*/.test(this.futureToken)
    }

    get imediateFutureTokenIsIntegerLiteral() {
        return /([+\-])?[0-9][0-9]*/.test(this.immediateFutureToken)
    }

    get nextTokenIsIntegerLiteral() {
        return /([+\-])?[0-9][0-9]*/.test(this.nextToken);
    }

    get nextSafeTokenIsIntegerLiteral() {
        return /([+\-])?[0-9][0-9]*/.test(this.safeNextToken);
    }


    get currentTokenIsKeyWord() {
        return this.at(Keyword.regex);
    }

    // this type of string does not have skipping of chars and
    // can cover all sections of a template structure with capabilities of having variables
    // the feature can also be input to  common string
    // but considerations have to be made before we move the section to
    // the specified requirements.
    get parseTemplateString() {

    }

    get parseString() {
        let skip = true;
        let s = new StringLiteralExpression();
        this.considerSpaces = true;
        while (this.immediateToken) {
            // exit if the next toke is a " but if it is not then just skip this section
            if (this.cT === `"`) break;
            s.add(this.cT)
        }
        this.considerSpaces = false;
        return s;
    }

    get safeNextToken() {
        try {
            return this.nextToken;
        } catch (e) {
            this.cT = undefined;
            return false;
        }
    }

    get considerSpaces() {
        return this.skipSpaces && this.skipTabs && this.skipNewLine;
    }


    set considerSpaces(boolean) {
        this.skipNewLine = boolean;
        this.skipSpaces = boolean;
        this.skipTabs = boolean;
    }

    get immediatePrevToken() {

    }

    convert(language, saveTo) {
        switch (language) {
            case "php":
                let stream = fs.createWriteStream(`${saveTo}.php`);
                stream.once('open', fd => {

                    stream.write(`<?php\n`);

                    this.tree.forEach(v => {
                        stream.write(v.convert('php'))
                    });

                    stream.end();
                });
                break;
        }
    }

    get immediateToken() {
        this.considerSpaces = true;
        this.nextToken;
        this.considerSpaces = false;
        return this.cT;
    }

    get immediateFutureToken() {
        this.considerSpaces = true;
        this.fT = this.nextToken;
        this.cT = this.tokens[--this.index];
        this.considerSpaces = false;
        return this.fT;
    }

    get safeImmediateToken() {
        try {
            return this.immediateToken
        } catch (e) {
            return false
        }
    }

    requiredImmediateToken(token) {
        if (this.immediateToken !== token) {
            throw new UnexpectedToken(this, `"${token}"`)
        }

        return this.cT;
    }

    immediateIdentifier(error = `to find identifier immediately before`) {
        this.considerSpaces = true;
        this.nextToken;
        if (!this.currentTokenIsIdentifier)
            throw new UnexpectedToken(this, error += ` ${this.cT}`);

        this.considerSpaces = false;
        return this.cT;
    }

    at(regex) {
        return regex.test(this.cT);
    }

    get nextToken() {
        // check new line states
        this.skipedTokens = 0;
        while (++this.index < this.tokens.length) {
            this.cT = this.tokens[this.index];
            if (/\n/.test(this.cT)) this.line += 1;
            if (this.considerSpaces) return this.cT;
            if (this.at(/(\s|\n|\t)/)) {
                ++this.skipedTokens;
                continue
            }
            return this.cT
        }

        throw new UnExpectedEndOfLine(this)
    }

    get safePrevToken() {
        try {
            return this.prevToken
        } catch (e) {
            // TODO log there are no more previous tokens
            return false
        }
    }

    get prevToken() {
        if (--this.index >= 0) {
            this.cT = this.tokens[this.index];
            if (this.at(/^\n$/)) this.line -= 1;

            if (this.considerSpaces) return this.cT;

            return this.at(/^(\s|\t)$/) ? this.prevToken : this.cT;

        }

        throw new Error("Unexpected token request no previous token available.")
    }

    get parseArguments() {

    }

    get parseFunctionBody() {

    }

    get statements() {
        function space() {
        }


        space(1, 2, 3)
    }

    get nextTokenIsInNewLine() {
        let l = this.line;
        this.nextToken;
        let l1 = this.line;
        this.prevToken;

        return l1 > l;
    }

    get nextTokenIsIdentifier() {
        this.nextToken;
        let bool = this.currentTokenIsIdentifier;
        this.prevToken;

        return bool;
    }

    get futureToken() {
        this.fT = this.nextToken;
        this.fI = this.index;
        this.fL = this.line;
        this.prevToken;
        return this.fT;
    }

    get useFutureToken() {

        this.index = this.fI;
        this.line = this.fL;
        return this.cT = this.fT;
    }

    get futureTokenIsIdentifier() {
        return Identifier.isValid(this.futureToken);
    }

    get prevTokenIsInPrevLine() {
        let line = this.line;
        this.prevToken;
        let line1 = this.line;
        this.nextToken;
        return line > line1;
    }

    get tokenIsInNewLine() {
        return this.prevTokenIsInPrevLine;
    }

    get startLineTabCount() {
        if (this.tokenIsInNewLine) {

        }
    }

    get indentBefore() {
        let i = 0;

        let t = this.index;
        if (this.tokenIsInNewLine) {
            while (!/\n/.test(this.tokens[--t]) && !Identifier.isValid(this.tokens[t])) {

                if (/\t/.test(this.tokens[t])) {
                    i += 4;
                } else i += 1
            }
        }

        return i;
    }

    get argumentList() {
        let args = new ArgumentList(), argument = new Argument();
        while (this.nextToken) {
            if (this.cT === ")") {
                args.add(argument);
                return args
            }
            if (this.currentTokenIsIdentifier) {
                argument.name = this.cT;
                if (this.futureTokenIsIdentifier) {
                    argument.type = argument.name;
                    argument.name = this.cT;
                }
            } else if (this.cT === "." && this.requiredImmediateToken(".") && this.requiredImmediateToken(".")) {
                argument = new ArrayOfArgs(this.cT, argument.name)
            } else if (this.cT === "{") {

            } else if (this.cT === "=") {
                if (this.immediateToken === "=") {
                    //TODO we should get whatever the parser returns to us at
                } else if (this.currentTokenIsIdentifier || this.futureTokenIsIdentifier) {

                } else if (this.cT === `"` || this.futureToken === `"`) {
                    if (argument.type === "Object" || argument.type === "String") {
                        this.nextToken;
                        argument.default = this.parseString;
                        argument.type = "String"
                    } else throw new Error(`Unexpected string literal expected ${argument.type}`)

                } else if (this.currentTokenIsIntegerLiteral || this.futureTokenIsIntegerLiteral) {
                    if (this.currentTokenIsIntegerLiteral) {

                    } else if (this.futureTokenIsIntegerLiteral) {

                    }

                    if (argument.type === "Object") {
                        argument.type = "Integer"
                    } else if (argument.type !== "Integer") throw  new Error(`Unexpected Type expecting ${argument.type}`);

                    argument.default = this.parseIntegerLiteral;
                } else throw new UnexpectedToken(this);
            } else if (this.cT === `"`) {

            } else if (this.cT === `|`) {

            } else if (this.at(/^([><!])$/)) {

            } else if (this.at(/[0-9]/)) {

            } else if (this.cT === ":") {

            } else if (this.cT === ",") {
                if (this.futureToken !== ")") {
                    args.add(argument);
                    argument = new Argument();
                } else throw new UnexpectedToken(this)

            } else throw new UnexpectedToken(this)

        }


    }


    get parseIntegerLiteral() {
        let integer = new IntegerLiteralExpression();
        if (this.nextToken === "-" || this.cT === "+") {
            integer.sign = this.cT;
        }


        if (this.currentTokenIsIntegerLiteral) {
            integer.tokens.push(this.cT);
        }
        else if (this.imediateFutureTokenIsIntegerLiteral) {
            integer.tokens.push(this.immediateToken);
        }

        else if (this.cT === ".") {

        }

        //TODO parse float integers
        if (this.futureToken === ".") {

        }


        return integer
    }


    /*get argument() {
        let arg = new Argument();
        if (this.currentTokenIsIdentifier) {
            arg.name = this.cT;
            if (this.nextToken === "," || this.cT === ")") {
                this.prevToken;
            } else if (this.currentTokenIsIdentifier) {
                arg.type = arg.name;
                arg.name = this.cT;
            } else if (this.cT === "." && this.requiredImmediateToken(".") && this.requiredImmediateToken(".")) {
                arg = new ArrayOrArgs(this.nextIdentifier(), arg.name);
            }

            if (this.futureToken === "=") {

            }
        } else if (this.cT === "." && this.requiredImmediateToken(".") && this.requiredImmediateToken(".")) {
            arg = new ArrayOrArgs(this.nextIdentifier(), arg.name);
        }

        return arg;
    }*/


    get parameterList() {

    }


    parseClassBody(klass) {
        while (this.nextToken) {
            if (this.cT === "}") break;
            let prop = new Property();
            if (this.currentTokenIsIdentifier) {
                if (this.at(/^(public|protected|private)$/)) {
                    this.parseProperty(this.cT, prop);
                }

                if (this.at(/^static$/)) {

                }

                if (this.at(/^this$/)) {
                    prop.type = klass.name;
                    this.nextToken
                }


                klass.properties.push(prop);
                continue;
            }

            throw new UnexpectedToken(this);
        }
    }

    parseProperty(accessModifier, prop, klass) {
        prop.accessModifier = accessModifier;
        if (this.nextTokenIsIdentifier) {
            if (this.currentTokenIsKeyWord) {
                if (this.cT === "static") {
                    prop.static = true
                } else if (this.cT === "this") {
                    prop.type = klass.name;
                }
            }
        }
    }

    parseArgumentsList(func) {
        while (this.nextToken) {
            if (this.at(/^{$/)) break
        }
    }

    parseClassMethod() {

    }

    parseClassProperty(klass, property) {
        if (this.nextIdentifier("expected an identifier")) {

        }
    }

    goBack(steps) {
        while (steps--) {
            this.prevToken;
        }
    }

}


class Convert {
    convert(lang) {
        if (isDefined(this[lang])) {
            this[lang]()
        } else throw new Error(`Unexpected lnguage converter ${lang}`);
    }
}


class Type extends Convert {
    php() {

    }
}

class StringType extends Type {
    constructor() {
        super();

    }

    static get TYPE() {
        return String;
    }

    php() {

    }

}

class Class extends Convert {
    constructor(name) {
        super();
        this.name = name;
        // class templates
        this.interfaces = [];
        // this are classes that have both abstract methods and methods at the same time
        this.traits = [];
        // define a super class for the current class
        this.super = undefined;
        // register error thrown by a class
        this.exception = undefined;
        // properties are either methods or simple properties
        this.properties = [];
    }

    /**TODO
     * check if the traits have methods that need to be implemented or not
     *  if there are methods to be implemented then we
     * */
    get hasTemplates() {
        return this.hasInterfaces || this.hasTraits
    }

    php() {
        let s = `\n\nclass ${this.name}`;
        if (this.super) {
            s += ` extends ${this.super}`;
        }

        if (this.hasInterfaces) {
            s += ` implements ${this.interfaces.join(', ')}`;
        }
        s += " {";

        if (this.hasTraits) {
            s += `\n\n\t\t use ${this.traits.join(',')};\n`;
        }


        return s += "}";
    }

    hasInterface(name) {
        return name in this.interfaces;
    }

    get hasInterfaces() {
        return !!this.interfaces.length
    }

    get hasTraits() {
        return !!this.traits.length;
    }


    addInterface(interfaceName) {

        this.add('interfaces', interfaceName);
    }


    addTrait(name) {
        this.add('traits', name)
    }

    add(name, value) {
        for (let item of this[name]) {
            if (item === value) throw new Error(`Can not add item ${value} class already has it in its ${name} \n already available ${name} =  ${this[name]} `);
        }

        this[name].push(value)
    }


}


class LiteralExpression extends Convert {
    constructor() {
        super();
    }

    php() {

    }
}


class Property extends Convert {
    constructor(name = undefined) {
        super();
        this.type = undefined;
        // string
        this.name = name;
        // or protected or private
        this.accessModifier = 'public';
        // undefined or static
        this.static = false;
    }


    php() {

    }

    duplicate() {
        let prop = new Property();
        prop.accessModifier = this.accessModifier;
        prop.static = this.static;
        prop.type = this.type;
        return prop;
    }
}

class Function extends Convert {
    constructor(name, type = undefined) {
        super();
        this.name = name;
        this.returnTypes = [type];

    }

    php() {

    }
}

class Method extends Function {
    constructor({name, type, accessModifier, instanceAccessModifier}) {
        super(name, type);
        this.accessModifier = accessModifier;
        this.instanceAccessModifier = instanceAccessModifier;

    }

    php() {

    }
}


class Variable extends Convert {
    php() {

    }
}


class Argument extends Convert {
    constructor(name, type = "Object") {
        super();
        this.name = name;
        this.type = type;
        this.def = [];
        this.tests = [];
    }


    set default(value) {
        this.def.push(value);
    }

    get hasDefaults() {
        return this.def.length > 0;
    }


    get default() {
        return this.def;
    }

    assign(variable) {
        if (this.test(variable)) {

        }

        // throw wrong variable set for the provided context.name requires context.argumentList.indexOf(variable) to be of type this.type
    }

    php() {

    }
}

class ArrayOfArgs extends Argument {
    constructor(name, type = undefined) {
        super(name, type);
        this.variables = [];

    }

    add(variable) {
        let type = this.type;
        if (variable.type === type) {
            this.variables.push(variable)
        } else throw new Error(`Argument has to be of type ${type}`)
    }
}

class ArgumentList extends Convert {
    constructor(name, context) {
        super();
        this.context = context;
        this.args = [];
    }

    indexOf(variable) {

    }


    add(variable) {
        this.args.push(variable)
    }

    php() {

    }


    // this is how we shall execute an arguments liset
    run(...args) {
        // create new variables for the function itself and delete in the garbage collection
    }


    // cleare all the args data
    clear() {

    }
}


class DestructingArgument extends Argument {
    constructor(name, type) {
        super(name, type);
        // value is the default value;
        this.value = undefined;
        // contains the named arguments
        this.arguments = [];
    }


    php() {

    }


}


class Parameters extends Convert {
    constructor(params) {
        super();

    }


    php() {

    }

}


class NamedParameters extends Convert {
    constructor(...args) {
        super();
        this.params = {};
        for (let [name, value] in args) {
            this.params[name] = value
        }
    }

    get names() {
        return Object.keys(this.params);
    }

    php() {

    }


}

class DestructingArgumentList extends Argument {
    constructor(name, type) {
        super(name, type);
        // value is the default value;
        this.value = undefined;
        // contains the named arguments
        this.arguments = [];

    }


    php() {

    }


}

class ArrayLiteralExpression extends LiteralExpression {
    constructor() {
        super();
    }

    php() {

    }

}


class IntegerLiteralExpression extends LiteralExpression {
    constructor(sign = `+`) {
        super();
        this.sign = sign;
        this.tokens = [];
    }

    php() {

    }
}

class StringLiteralExpression extends LiteralExpression {

    constructor() {
        super();

        this.tokens = [];
    }

    add(token) {
        this.tokens.push(token);
    }

    php() {

    }
}

class StringTemplateExpression extends StringLiteralExpression {
    php() {

    }
}


class RegexLeteralExpression extends LiteralExpression {
    php() {

    }
}

let file = "app/controllers/base/App";
let example = "../examples/Class";
let f = `../examples/Offersgalore/unify/${file}`;
let save = `../examples/Offersgalore/php/${file}`;
let parser = new UnifyParser(example);
parser.convert("php", save);
