import LBracket from "../tokens/LBracket";
import Parser from "./Parser"

export default class Arguments extends Parser {
    /*-default just any type is required here
    * (age)
    *
    * argument destruction is done here
    * age({age})
    *
    * // this means that each of the inputs in the call should be of type array
    *
    * (Array inputs...)
    *
    * inline filter(T[] obj, func(T)=> Boolean)
    *
    * argument deconstruction for array
    *
    * (items[age])
    *
    * ([name,age,details...])
    *
    * setName(String name){}
    *
    * // ordered multi arguments.
    * ([Number,operator,Number] items...)
    *
    * (name,age>=0)
    *
    * s(Int divisible,Int divider != 0:"Division by zero"){}
    *
    * (age > 0: "Age has to be greater than zero")
    *
    * ((name,year,age|{name,year,age}))
    *
    * (name?,age)
    * (sex = "male")
    * (sex =  "male" == "male"|"female"|"bisexual")
    *
    * // function parameter validation
    * (sex == validatorFunctionIdentifier)
    *
    * // function parameter validation with default value provided
    * (String sex  = "male" == validatorFunctionIdentifier)
    *
    * // multi dimensional arguments protection
    * (String[] args[1][12])
    * */
    static shouldParse(code) {
        let {cT, i} = code;

        // check LBracket
        // check identifier | identifier identifier |
        // comparison | (argument list) | nullable | assignment | LSBracket
        // check for single argument
        // check for multiple arguments
        // check for destructed arguments
        // check for default arguments
        // check for default with

        if (!cT.is(LBracket)) return false;


        while ((cT = code.nextToken())) {

        }


        return false
    }

    parse(code, ast) {

    }
}

