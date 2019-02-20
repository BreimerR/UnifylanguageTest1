export default class UnexpectedEndOfFile extends Error {
    constructor(code) {
        super(`Unexpected end of file ${code.sourceFile}`)
    }
}