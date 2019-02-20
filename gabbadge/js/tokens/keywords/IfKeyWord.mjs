import Token from "../Token"

export default class IfKeyWord extends Token{
    get regex() {
        return /if/
    }
}