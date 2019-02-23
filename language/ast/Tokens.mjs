import NewLine from "../../compiler/tokens/characters/NewLine"
import Tab from "../../compiler/tokens/characters/Tab"
import Space from "../../compiler/tokens/characters/Space"

export class Tokens {
    /**
     * @param tokens Array
     * */
    constructor(tokens) {
        this.tokens = tokens;
        this.considerSpaces = true;
        this.considerNewLine = true;
        this.i = -1;
        this.safe = false;

    }

    [Symbol.iterator]() {
        return this
    }

    next() {
        return {
            value: this.nextToken,
            done: !this.hasRemTokens
        }
    }

    /**
     * check if there is a new token inside
     * does not consider spaces as valid token until
     * an actual token is discovered.
     * */

    /**TODO
     * logic does not add up.
     *
     * */
    get hasValidToken() {
        let tokens = this.copy;

        let {safe} = tokens;
        tokens.safe = true;
        for (let token of tokens) {
            if (!token.isEither(NewLine, Space, Tab)) {
                tokens.safe = false;
                return true
            }
        }

        //restore safety.
        tokens.safe = safe;
        return false;
    }

    get hasRemTokens() {
        return this.i < this.tokens.length;
    }

    get hasTokens() {
        let {copy} = this;
        copy.considerSpaces =  true;
        copy.safe= true;
        return this.copy.nextToken !== undefined;
    }

    each(fn) {
        for (let token of this) {
            fn(token, this.i)
        }
    }

    get currentToken() {
        return this.tokens[this.i]
    }

    get nextToken() {
        this.i += 1;

        let {currentToken, considerSpaces} = this;

        if (currentToken === undefined) {
            if (this.safe) {
                return currentToken;
            } else throw new Error("Required token unavailable");
        }

        return considerSpaces ? currentToken : (currentToken.isEither(NewLine, Space, Tab) ? this.nextToken : currentToken)
    }

    futureTokenIsEither(...options) {
        let {copy: tokens} = this;
        tokens.nextToken.isEither(...options);
        return false;
    }

    futureTokenIs(expectedToken) {
        let {copy: tokens} = this;

        return tokens.nextToken.is(expectedToken)
    }

    get futureToken() {
        return this.copy.nextToken
    }

    get copy() {
        return Object.create(this)
    }
}