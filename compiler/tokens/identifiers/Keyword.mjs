import Identifier from "./Identifier"

export default class Keyword extends Identifier {
    testToken(token) {
        return this.constructor.testToken(token)
    }


    static testToken(token) {
        let {words} =  this;
        for (let i in words) {
            let word = words[i];
            if(token.token === word)  return true;
        }

        return false;
    }
}

Keyword.words = [
    "infix",
    "prefix",
    "class",
    "abstract",
    "closed",
    "trait",
    "interface",
    "public",
    "static",
    "void",
    "null",
    "when",
    "for",
    "if",
    "elif",
    "aka",
    "else",
    "get",
    "set",
    "switch",
    "while",
    "new",
    "do"
];