import Parser from "../Parser";
import ParseSection from "./ParseSection";

export default class AlternativeSectionParser extends ParseSection {
    test(tokens) {
        return this.getSection(tokens) !== undefined;
    }

    getSection(tokens) {
        let {sections} = this;

        for (let sI in sections) {
            let {i} = tokens,
                section = sections[sI];


            let test = this.constructor.test(tokens, section);

            if (test) {
                return section
            } else if (sI + 1 <= sections.length) {
                tokens.i = i
            }
        }

    }

}