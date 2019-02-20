import {Ast as LangAst} from "../../language/ast/Ast"

export default class Ast extends LangAst {

    /**
     * @param statement Statement
     * @return none
     * */
    push(statement) {
        if (statement.named) {
            this.statements.named.push(statement)
        } else this.statements.unnamed.push(statement)
    }

    declarationExists() {
        // search all named declarations functions,variables,
    }
}