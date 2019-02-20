

export default class Token {
    // TODO
    /*
    * takes string and converts to reasonable tokens
    * */

    // final function and should not be repeated from any location.
    is(...constructors) {
        let b = false;
        for (let constructor of constructors) {
            if (new constructor instanceof this.constructor) {
                b = true;
                break;
            }
        }

        return b
    }

    toString() {
        return this.token;
    }

    validate(tokenString) {
        return this.regex.test(tokenString)
    }


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

}

function a(...names){
    b(...names)
}

function b(...names){
    names.forEach(a => console.log(a))
}


a(1,2,3,4);