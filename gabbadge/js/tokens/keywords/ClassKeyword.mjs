import Token from '../Token';

export default class ClassKeyword extends Token {

    get regex(){
        return /class/
    }

}