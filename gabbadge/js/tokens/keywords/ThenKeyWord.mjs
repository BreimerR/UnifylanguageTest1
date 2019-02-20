import Token from '../Token'

export default class ThenKeyWord extends Token {
    get regex(){
        return /then/
    }
}