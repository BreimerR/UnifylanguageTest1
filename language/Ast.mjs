export default class Ast {
    /*
    * Should take in nothing an already available ast
    *
    *
    * */
    constructor() {

    }


    get copy() {
        return Object.create(this)
    }

}