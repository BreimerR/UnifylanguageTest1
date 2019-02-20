package statements

import tokens.Token


/** TODO
 * A statement contains one or more tokens
 * example a class definition will have nested statement
 * a function will have nested statements too
 *
 * class A{
 *     private name = "Breimer"
 *     age(){
 *          when a = 12 {
 *              
 *          }
 *     }
 *
 *     get age{
 *
 *     }
 * }
 *
 * above we have classStatement,
 * inside the class statement we have
 * */
open class Statement (private val tokens: Array<Token>){

}