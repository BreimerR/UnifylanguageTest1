import Statement from "./Statement"
import Dollar from "../../tokens/characters/Dollar";

export default class SimpleVariableDeclaration extends Statement {
    claimTokens(tokens) {
        let [type, name] = tokens;

        if (type instanceof Dollar) {
            this.type =  undefined
        }else this.type =  type;

        this.name = name;
    }
}

SimpleVariableDeclaration.section = ["type", "name"];