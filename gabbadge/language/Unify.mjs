import Language from "./Language";
import {log} from "./helpers";

export default class Unify extends Language {
    constructor(definitions, code) {
        super(definitions, code);
        this.tokenize();
    }


    get separation() {
        return `(${this.omSpace}|${this.omTab})`
    }

    tokenize() {
        let {
                code, definitions: defn,
                structure: {sace, tab, colon, newLine, extnd},
                operators, tokens, token, separation: sep, omSpace, omTab
            } = this,
            {OBJECT_IDENTIFIER} = tokens,
            Class = `(interface|class|trait|abstract${sep}class)${sep}${OBJECT_IDENTIFIER}`,
            oSep = `${sep}?`,
            classExtends = `(${extnd}${oSep}${OBJECT_IDENTIFIER}((${oSep},${oSep}${OBJECT_IDENTIFIER})+)?)`,
            classImplements = `((implements|::))`,
            applyTrait = ``,
            classStartBrace = `\\{`,
            classExtenstions = `${classExtends}?${oSep}${classImplements}`,
            classStart = `${Class}${oSep}${classExtenstions}`,
            classRegex = `${classStart}`;

        let regex = new RegExp(classRegex, 'g'),
            matched = regex[Symbol.match](code);

        if (matched) {
            matched.forEach(match => {
                log(match)
            })
        }
    }

    parse() {

    }
}