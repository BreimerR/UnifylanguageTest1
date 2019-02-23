import {Tokens as LangTokens} from "../../language/ast/Tokens"
import EndOfFile from "../tokens/characters/EndOfFile"

export default class Tokens extends LangTokens {
    constructor(tokens) {
        tokens.push(new EndOfFile(""));
        super(tokens)
    }

    /**TODO
     * consider handling order checks from here
     * */
    test(...sections) {

    }
}