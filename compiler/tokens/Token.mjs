import {Token as LanguageToken} from "../../language/tokens/Token"

export default class Token extends LanguageToken {
    constructor(value) {
        super(value)
    }

    static test(tkString) {
        return this.rgx.test(tkString)
    }

}