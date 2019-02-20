export default class UnexpectedKeywordUsed extends Error {

    constructor(object, expected = 'token') {
        super(`Unexpected keyword ${object.cT}\n  Expected ${expected} found ${object.cT}`);
    }
}