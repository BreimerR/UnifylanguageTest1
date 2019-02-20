import UnifyError from "./UnifyError"

export default class UnexpectedToken extends UnifyError {
    constructor(code) {
        let {currentToken: token, fileName} = code;

        // row indicates where the token starts to be seen
        super(`Unexpected token on line ${token.line} row ${token.row}`)
    }
}