import Parser from "./Parser";
import ParseSection from "./ParseSection";

export default class AlternativeSectionParser extends ParseSection {
    test(tokens) {
        let section, {safe} = tokens;
        tokens.safe = true;
        section = this.getSection(tokens);
        let test = section !== undefined;
        //console.log(section);
        tokens.safe = safe;
        return test;
    }

    getSection(tokens) {
        let {sections} = this;
        let {i} = tokens;

        for (let index in sections) {
            let section = sections[index];
            let test = section instanceof Parser ? section.test(tokens) : (tokens.hasTokens ? tokens.nextToken.is(section) : false);

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
            sec = section.consumeTokens(tokens);
        } else sec = tokens.nextToken;

        return sec;
    }
}