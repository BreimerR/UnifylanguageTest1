import {log} from "../../../language/helpers";

function* Generator(arg) {
    let i = 0;

    while(i< arg.length){
        yield arg[i++]

    }



}

export default class Parser {

    * next() {
        this.index+=1;
        yield this.tokens[this.index];
    }
}

let  b =  Generator([1,2,3,4]);

log(b.throw());
log(b.next());
log(b.next());
log(b.next());
log(b.next());



