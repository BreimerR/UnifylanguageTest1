import Token from "./Token";

export default class Question extends Token {
    static get token() {
        return  `\\?`
    }
}