import Token from "./Token";

export default class UnifyNumber extends Token {
    constructor(token) {
        super();
        this.tk = token;
    }

    get token() {
        return this.tk;
    }


    static get regex() {
        return /([+\-])?[0-9]+([0-9]*|[EFe][0-9]+)?/;
    }

    static isValid(token) {
        return this.regex.test(token);
    }


}