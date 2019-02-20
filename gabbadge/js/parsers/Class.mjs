import Parser from './Parser'
/*
* if we want to have extra stuff
* we must have compile instructions procedures
* thus to mean when the compiler meets with something that it can not parse
* it refers to the instructions that we have provided
* thus compiler instructions have to be written in the language the compiler
* is written in and actions can be done with eval
* to mean to use infix functions that are class based we have to import the class
* so that the compiler does not go through the whole process of searching
* for the whole file again
*
* */
export default class Class extends Parser {
    /*
    takes in the tokenized object
    checks if the current token and the next token is
    of the required order of tokens */

    shouldParse(preAst) {
        let {cT,index} = preAst;
        // check the current order of tokens and
        // if this parser should parse now
        // if yes parse else request for another parser
    }
}