import Token from "./Token";

export default class SqLine extends Token {
    static get token() {
        return `~`
    }
}