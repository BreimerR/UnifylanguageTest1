export default class UnExpectedEndOfLine extends Error {
    constructor(obj) {
        super(`Unexpected end  of line ${obj.line} before the last "${obj.cT}"`)
    }
}