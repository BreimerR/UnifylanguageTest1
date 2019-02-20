import Parser from "./Parser"

/*
* a == 12 => 20
*
* if(a == 12) => 20
*
* if(a == 12) return 20
*
* if(a == 12){
*   return 20
* }
*
* a == 12 -> a = 20
*
* if (a == 12) a = 20
*
* if(a == 12) {
*   a = 20
* }
*
* */

export default class If extends Parser {
    shouldParse(preAst) {
        let {cT, line, col} = preAst;

        // test,evaluation
        // if keyword
        // left bracket test rBracket

    }
}