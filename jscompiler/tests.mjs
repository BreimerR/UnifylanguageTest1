import {Tokenizer} from "../language/lexer/Token";
import Splitter from "../language/lexer/Spliter";
import Identifier from "./parse/tokens/Identifier";
import Unify from "./Unify";
import {log} from "../language/helpers";
import UnexpectedToken from "./parse/exceptions/UnexpectedToken";

let tokens = Splitter.split("../Destructing.u");


let parser = new Unify(tokens);

if (this.currentToken === ":") {
    if (this.immediateToken === ":") {
        if (Identifier.isIdentifier(this.nextToken)) {
            tree.templates.push(this.currentToken);
            while (this.nextToken === ",") {
                if (Identifier.isIdentifier(this.nextToken)) {
                    if (Keyword.isKeyword(this.currentToken)) {
                        throw new Error(`Keyword ${this.currentToken}  is reserved by the language and not to be used here `)
                    } else tree.templates.push(this.currentToken);
                } else throw new UnexpectedToken(this.currentToken);
            }
            // revert to prev token since it is not used
            this.prevToken
        } else {
            throw new Error(`un expected token ${this.currentToken}`)
        }
    } else if (Identifier.isIdentifier(this.currentToken) || Identifier.isIdentifier(this.nextToken)) {
        if (Keyword.isKeyword(this.currentToken)) {
            throw new Error(`Key word is not expected in class Declaration ${this.currentToken}`)
        } else tree.super = this.currentToken
    } else throw new UnexpectedToken(this.currentToken + ` Found Class extension section but super class name not provided got ${this.currentToken}`);

} else {
    log(tree)
}


class S{
    get sections() {

        switch (this.nextToken) {
            // arguments start
            case "(":
                log("arguments start");
                break;
            case ":":
                // parse super class
                log("getting sections");

                if (this.immediateToken === ":") {
                    if (Identifier.isValid(this.nextToken)) {
                        this.interfaces;
                        if (Identifier.isValid(this.currentToken)) {
                            let line = this.line;
                            if (this.currentToken === "throws") {
                                this.prevToken;
                                this.sections
                            } else if (this.line === line) {
                                throw  new UnexpectedToken(this);
                            } else {
                                return
                            }
                        } else if (this.currentToken === "(" || this.currentToken === ":" || this.currentToken === "{") {
                            this.prevToken;
                            this.sections;
                        }
                    } else throw new UnexpectedToken(this, 'Interface  function definition');
                }
                else if (Identifier.isValid(this.currentToken) || (/[\s\n\t]/.test(this.currentToken) && Identifier.isValid(this.nextToken))) {
                    // TODO get the declared function class here
                    this.tree.super = this.currentToken;



                } else throw new UnexpectedToken(this, `super definition`);
                break;
            case "{":
                log("function start");
                break;
            // get function exceptions
            case "throws":
                log("function ending")

        }
    }
}



