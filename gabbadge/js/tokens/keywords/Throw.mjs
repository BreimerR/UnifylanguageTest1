import Token from "../../../jscompiler/parse/tokens/Token";

export default class Throw extends Token {
    get regex() {
        return /throw/
    }
}