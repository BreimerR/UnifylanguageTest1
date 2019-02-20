import LanguageError from "../LanguageError";

export default class UnregisteredToken extends LanguageError {
    constructor(tokenString) {
        super(`Invalid token found ${tokenString}`)
    }
}