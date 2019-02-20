export default class UnexpectedToken extends Error {
    constructor(object, expected = "", before = "") {
        let token = object.cT;
        let spaceN = {},
            column = object.col;
        let more = "", line = object.line;
        try {
            more = `after ${object.prevToken}`;
        } catch (e) {
        }

        spaceN[`space or new LIne ${more}`] = /[\s\n]/;
        spaceN.tab = /\t/;
        for (let [key, value] of Object.entries(spaceN)) {
            if (value.test(token)) token = key;
        }
        super(`Unexpected token  ${token} at line ${line} column ${column}  before ${expected === "" ? "" : "\n Expected " + expected} `)
    }
}