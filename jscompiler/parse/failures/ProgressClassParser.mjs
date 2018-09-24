class IllegalClassExtansion extends Error {
    constructor(className) {
        super(`Class ${className} already has a super class.`);
    }
}

class UnexpectedToken extends Error {
    constructor(token) {
        super(`Unexpected token ${token}`);
    }
}

class Unify {
    constructor(tokens) {
        this.tokens = tokens;
        this.tree = {
            variables: {},
            classes: {},
            functions: {}
        };
        this.line = 0;
    }

    init(index = 0) {
        if (index < this.tokens.length) {
            let parser = new this.parser(this, index);
            parser.parse(index);

            // if not done parsing parse again;
            return this.init(parser.index);
        }
    }

    getClass(name) {
        return this.tree.classes[name];
    }

    get parser() {
        // found parser;
        return this.prevParser = ClassParser
    }
}


class Parser {
    constructor(base, index) {
        this.base = base;
        this.index = index;
        this.ln = 0;
        this.tokens = base.tokens;
        this.end = false;
    }

    get nextToken() {
        if (this.index < this.tokens.length) {
            let token = this.tokens[this.index++];
            return this.currentToken = /[\s\t\n]/.test(token) ? this.nextToken : token;
        }
        return null;
    }


    get prevToken() {
        if (this.index >= 0) {
            let token = this.tokens[this.index -= 1];
            return /[\s\t\n]/.test(token) ? this.prevToken : token;
        }
        return null;
    }

    get immediateToken() {
        if (this.index < this.tokens.length) {
            return this.currentToken = this.tokens[this.index++]
        }
        return null;
    }

}

class ClassParser extends Parser {
    parse(index) {
        // remove class keyword
        this.nextToken;

        let tree = new Class();
        tree.name = this.nextToken;
        this.setExtensions(tree);
        log(tree)
    }

    getTraits(tree) {
        if (Identifier.isIdentifier(this.nextToken)) {
            tree.traits.push(this.currentToken)
        } else throw new UnexpectedToken(this.currentToken);

        if (this.nextToken === ",") {
            this.getTraits(tree);
        }
    }

    setExtensions(tree) {
        let templatesDefined = false;
        while (this.nextToken) {
            //if (this.currentToken === "{") break;
            // check token if is extensions start else  if it is class start
            if (Identifier.isIdentifier(this.currentToken)) {
                if (this.currentToken === "use") {
                    this.getTraits(tree);
                } else {
                    throw new UnexpectedToken(this.currentToken)
                }
            } else if (this.currentToken === ":") {
                if (this.immediateToken === ":") {
                    if (templatesDefined) throw new Error(`Class templates already defined illegal class templates definitions`);
                    this.getTemplates(tree);
                    this.prevToken
                    this.prevToken
                    templatesDefined = true;
                    if (this.currentToken === "{") break
                } else {
                    if (tree.super === undefined) {
                        if (/[\s\t\n]/.test(this.currentToken)) {
                            if (Identifier.isIdentifier(this.nextToken)) {

                            }
                        } else if (Identifier.isIdentifier(this.currentToken)) {
                            tree.super = this.currentToken
                        } else {
                            throw new UnexpectedToken(this.currentToken + "  Bre")
                        }
                    } else {
                        throw  new IllegalClassExtansion(tree.name)
                    }
                }
            }
        }
    }

    getTemplates(tree) {
        if (this.nextToken === null) {
            throw new UnExpectedEndOfLine(this.ln);
        } else if (Identifier.isIdentifier(this.currentToken)) {
            tree.templates.push(this.currentToken);
        } else {
            throw new UnexpectedToken(this.currentToken)
        }

        if (this.nextToken === ",") {
            this.getTemplates(tree);
        }
    }
}

class Class {
    constructor(name, constructor) {
        this.super = undefined;
        this.constructors = constructor;
        this.name = name;
        this.traits = [];
        this.templates = [];
        let properties = {
            static: {
                methods: [],
                variables: []
            },
            nonStatic: {
                methods: [],
                variables: []
            }
        };
        this.body = {
            public: Object.create(properties),
            private: Object.create(properties),
            protected: Object.create(properties)
        }
    }
}

class Identifier {
    static isIdentifier(token) {
        return /(_+)?[a-zA-Z][a-zA-Z0-9_$]*/.test(token)
    }
}

class Keyword {
    static get regex() {
        return /(class|if|instanceOf|trait|interface|switch)/
    }

    static isKeyword(token) {
        return this.regex.test(token)
    }
}

class Operator {
    static get regex() {
        return /([+\-=*/])/
    }

    static isOperator(token) {
        return this.regex.test(token)
    }

    comparison() {

    }
}

