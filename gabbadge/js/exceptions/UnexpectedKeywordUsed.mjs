export default class UnexpectedKeywordUsed extends Error {

    constructor(object, expected = 'token') {
        super(`Unexpected keyword ${object.cT}\nExpected ${expected} found ${object.cT}`);
    }
}