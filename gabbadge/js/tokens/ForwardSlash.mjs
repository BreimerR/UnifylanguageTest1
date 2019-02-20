import Token from "./Token";

export default class ForwardSlash extends Token {
    static get token() {
        return `/`
    }

    static get regex() {
        return new RegExp("^/$")
    }
}

