import Parser from "./Parser";
import ParseSection from "./ParseSection";

export default class AlternativeSectionParser extends ParseSection {
    test(tokens) {
        return this.getSection(tokens) !== undefined;
    }

    getSection(tokens) {
        let {sections} = this;

        let {i} = tokens;

        for (let index in sections) {
            let section = sections[index];
            let test = section instanceof Parser ? section.test(tokens) : (tokens.hasValidToken ? tokens.nextToken.is(section) : false);

            if (test) {
                return section
            } else tokens.i = i;
        }


        return undefined;
    }

    /*returns an array of asts */
    consumeTokens(tokens) {
        let section = this.getSection(tokens.copy);
        let sec;

        if (section instanceof Parser) {
            if(!Array.isArray(sec)){

            }else sec =[];

            sec.push(section.consumeTokens(tokens))
        } else sec = tokens.nextToken;

        return sec;
    }
}