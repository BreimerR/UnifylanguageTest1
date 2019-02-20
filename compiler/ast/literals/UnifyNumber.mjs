import Literal from "./Literal";

export default class UnifyNumberLiteral extends Literal {
    constructor(token) {
        super();
        this.tk = token;
    }

    static get rgx() {
        return /([+\-])?[0-9]+([0-9]*|[EFe][0-9]+)?/;
    }
}