/*
* a parser is like a pattern recognizer
* the only difference is that the patterns are recursive
* mutative and not consistent
* */

/*
* if it is a pattern recognition then
* we should design a pattern recognizer
* that is able to recognize the patterns
* separate the section of the patterns as required
* and return the required structure as parsed.
* */

/*
* we are not recognizing chars but units/sections
* 1st specify the units
* 2 specify the units order
* -- since no order is specific then we have an option of an unordered section
* -- unrecognized orders can exists as long as the order required is not fulfilled
* */

export class Parser {

    constructor(...sections) {
        this.sections = sections
    }

    // uses the code copy alone
    // should be a sneak peek into the code structure i.e the beginning
    // of a line of code should be able to tell the parser that should be used
    static shouldParse({copy}) {

    }

    static parse(tokens) {
        // parse from this to the next token
        /** TODO
         * @Features
         * current token is valid start of parse
         * peek next tokens are valid for statement
         * consume valid tokens for the current statement parse
         * continue consume till end of the statement is reached
         * */


        /**
         * let {nextToken,currentToken} = code
         *
         * while(isStatementEnd){
         *
         *
         *      currentToken = code.nextToken
         * }
         *
         * */
        this.parseFunc(tokens)
    }


    static parseFunc() {
        throw new Error("Every class should implement parseFunc")
    }

    isStatementEnd() {

    }
}

/**@Description parse
 * @param tokens
 * check tokens as we save consumed tokens
 * */