export default class Parser {
    // takes the first file
    // the other files will be compiled on run time
    // create temp files so as to store
    // half parsed files in import situations.
    static parse(code, ast) {
        throw new Error(`Class should implement parse method ${this.prototype.constructor.name}`);
    }

    static shouldParse() {
        throw new Error("Class does not define method shouldParse")
    }
}