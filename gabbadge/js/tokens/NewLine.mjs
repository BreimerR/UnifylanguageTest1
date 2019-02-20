import Token from "./Token";

export default class NewLine extends Token {
    static get token() {
        return  `\\n`
    }
}