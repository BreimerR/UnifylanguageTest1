import Identifier from "./Identifier";
import Regex from "../../../libs/Regex";


export default class DeclarationIdentifier extends Identifier {
    constructor(token) {
        let tK = "";
        for (let char of token) {
            if (char !== "$") tK += char;
        }
        super(tK)
    }

    static get rgxStart() {
        return /^\$+/
    }
}