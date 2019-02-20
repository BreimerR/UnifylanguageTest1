import Token from "./Token";

export default class And extends Token {
    static get token() {
        return `&`
    }
}

