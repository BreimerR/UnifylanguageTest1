import Token from "./Token";

export default class BackSlash extends Token {
    static isValid(token) {
        return /^\\$/.test(token)
    }

    static get token() {
        return `\\`;
    }
}