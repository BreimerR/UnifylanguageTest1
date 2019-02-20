import Sections from "./Sections";

export default class ObjectIdentifier extends Sections {
    static get regex() {
        return /(_+)?[A-Z][a-zA-Z_$]*/
    }

    static get sections() {
        return {
            UNDERSCORE_TOKEN: [/_/, 1, Infinity],
            CAPITAL_CHAR: [/[A-Z]/, 1],
            CHAR: [/[a-zA-Z_$]/, 0, Infinity]
        }
    }
}