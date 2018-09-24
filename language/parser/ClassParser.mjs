import Parser from './Parser'

export default class ClassParser extends Parser {


    get start() {
        //return `class <IDENTIFIER>`
        return `^class(\\s+|\\t+)(_)?[A-Z][a-zA-Z0-9_]*`
    }


    get end() {
        return `(.*}|\\n)`
    }

    parse() {

    }
}