import {Token as LanguageToken} from "../../language/tokens/Token"

export default class Token extends LanguageToken {
    constructor(value) {
        super(value)
    }

    static get tokens() {
        throw new Error("Please define tokens for the specified language")
    }

    static test(tkString) {
        return this.rgx.test(tkString)
    }

}