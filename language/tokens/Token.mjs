//TODO @Warn get rgx my throw Errors on test

export class Token {
    constructor(token) {
        this.token = token;
        this.len = token.length;
    }

    /**
     * @param tkString String
     * */
    static test(tkString) {
        return this.rgx.test(tkString)
    }

    /**
     * Test if the passed string section is a
     * valid type token of the requested type
     * @inline
     * @param token Token
     * @return Boolean
     * */

    is(token) {
        try{
            return this instanceof token;
        }catch (e) {
            throw new Error(token);
        }


    }

    isEither(...token) {

        let {length} = token, bool;

        for(let t of token){
            let tst = this.is(t);
            if(tst){
                return tst
            }
        }


        return false;
    }

    static toString() {
        return this.name;
    }
}
