import Token from "./Token";

export default class At extends Token {
    static get token() {
        return `@`
    }
}
