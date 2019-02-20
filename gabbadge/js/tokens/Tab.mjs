import Token from "./Token";

export default class Tab extends Token {
    static get token() {
        return  `\\t`;
    }
}