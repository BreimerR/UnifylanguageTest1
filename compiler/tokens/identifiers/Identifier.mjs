import Token from "../Token";
import Regex from "../../../libs/Regex";

export default class Identifier extends Token {

    static get baseRgx() {
        return /([a-zA-Z][a-zA-Z0-9_]*|_+[a-zA-Z0-9_]*)/;
    }

    static get rgxStart() {
        return /^/
    }

    static get rgx() {
        return Regex.combine(this.rgxStart, this.baseRgx);
    }


    get name() {
        return this.token
    }
}

