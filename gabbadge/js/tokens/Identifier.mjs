import Token from "./Token";

export default class Identifier extends Token {

    constructor(token) {
        super();

        this.tk = token
    }

    get token() {
        return this.tk;
    }

    set token(token) {
        this.tk = token;
    }

    static get regex() {
        return /^(_+)?([a-zA-Z][a-zA-Z0-9_]*|_+[a-zA-Z0-9_]*)/;
    }

}