import ParseSection from "./ParseSection";

export default class MixedOrderParser extends ParseSection {
    test(tokens) {
        let {i} = tokens;
        return this.getSections(tokens).length > 0;
    }

    getSections(tokens, sections = this.sections) {
        let parseSections = [], {i} = tokens;

        for (let sI in sections) {
            let section = sections[sI];

            if (this.constructor.test(tokens,section)) {
                parseSections.push(section)
            } else tokens.i = i;

        }

        return parseSections;
    }
}