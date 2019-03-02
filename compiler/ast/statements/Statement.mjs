import {Statement as LangStatement} from "../../../language/ast/statements/Statement";

export default class Statement extends LangStatement {
    constructor(tokens) {
        super();
        this.claimTokens(tokens)
    }


    claimTokens(tokens) {
        for (let i in tokens) {
            let segment = this.constructor.segments[i];
            // TODO relate segment to tokens or statements
        }
    }

}