export default class Identifier {

    constructor(token) {
        this.token = token;
    }

    static parse(token) {
        return new this(token)
    }

    static get regex() {
        return /(_+)?[A-Za-z][A-Za-z0-9_$]*/
    }

    static test(token) {
        return this.regex.test(token);
    }

    static isValid(token) {
        return this.regex.test(token);
    }

    static get isDeclaration() {
        return Regex.group(
            Regex.combine(
                ObjectIdentifier.regex,
                /[\s\n\t]/,
                /(_+)?[A-Za-z][A-Za-z0-9_$]*/
            ),
        );
    }
}