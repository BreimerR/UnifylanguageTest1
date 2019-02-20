import Parser from "./Parser";
import ParseSection from "./ParseSection";

export default class OptionalParser extends ParseSection {


    /**
     * for an optional section
     * if the option is false then we return true either way and rollback the token count
     * */
    test(tokens) {
        let {i, considerSpaces} = tokens, bool;
        tokens.considerSpaces = this.considerSpaces;

        for (let section of this.sections) {
            let test = section instanceof Parser ? section.test(tokens) : tokens.nextToken.is(section);
            bool = bool === undefined ? test : bool && test;
            i += 1;
        }

        // revers tokens index since no valid test was found
        if (bool !== true) tokens.i = tokens.i - i;

        tokens.considerSpaces = considerSpaces;

        return bool;
    }
}

