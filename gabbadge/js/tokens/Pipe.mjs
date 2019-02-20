import Token from "./Token";

export default class Pipe extends Token {
    static get token() {
        return `\\|`
    }
}