import Token from "./Token";

export default class Dollar extends Token {
    static get token() {
        return  `\\$`
    }
}

