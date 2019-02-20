import LangSyntaxError from "../../../language/errors/syntax/LangSyntaxError";

export default class UnifySyntaxError extends LangSyntaxError {
    constructor(token){
        super(`No valid parser`)
    }
}