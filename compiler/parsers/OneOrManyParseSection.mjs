import Parser from "./Parser";
import ParseSection from "./ParseSection";

export default class OneOrManyParseSection extends ParseSection {
    test(tokens, sections = this.sections) {
        for (let i in sections) {
            let section = sections[i];
            let test = section instanceof Parser ? section.test(tokens) :
                (tokens.hasValidToken ? tokens.nextToken.is(section) : false);

            if (test) {
                let {i} = tokens, t = this.test(tokens);
                if (t === false) {
                    tokens.i = i;
                    return true;
                }
            } else return false;
        }
    }


}