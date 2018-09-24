export default class Token {

    get token() {
        return this.constructor.token;
    }


    static get regex() {
        return new RegExp(`^${this.token}$`, this.flag);
    }

    static get token() {
        throw new Error(`Define token value for${this.prototype.constructor.name}`)
    }

    static isValid(token) {
        return this.regex.test(token)
    }

    toString() {
        return this.token;
    }

    is(...options) {
        let b = false;
        for (let option of options) {
            if (this instanceof option) {
                b = true;
                break;
            }
        }

        return b
    }

}






