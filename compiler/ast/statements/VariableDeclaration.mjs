import Statement from "./Statement";
import Token from "../../tokens/Token"


/**
 * Contains data if the variable is
 * function/method local, class local, completely external
 * */

export default class VariableDeclaration extends Statement {
    constructor() {
        super();
    }

    // a statement has segments with valid names

    // make sense of the collected sections
    claimTokens(tokens) {
        let [type,name] = tokens;
    }
}

VariableDeclaration.segments = ["type", "name", "end"];