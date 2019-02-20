import Token from "../Token";

export default class UnifyNumber extends Token {
    static get rgx() {
        return /[0-9]+([0-9]*)?/;
    }
}