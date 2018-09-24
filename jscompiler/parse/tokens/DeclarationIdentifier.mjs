import Identifier from "./Identifier";
import Regex from "../../../libs/Regex";
import {log} from "../../../language/helpers";

export default class DeclarationIdentifier extends Identifier {
    constructor(token) {
        let tK = "";
        for (let char of token) {
            if (char !== "$") {
                tK += char;
            }
        }
        super(tK)
    }

    static get regex() {
        let _ = 12;
        return Regex.combine(/\$+/, super.regex)
    }

    static isValid(token) {
        /*log(/(\$+)(_+)?([a-zA-Z][a-zA-Z0-9_]*|_+[a-zA-Z0-9_]*)/.test(token),token);*/
        return /(\$+)(_+)?([a-zA-Z][a-zA-Z0-9_]*|_+[a-zA-Z0-9_]*)/.test(token)
    }
}