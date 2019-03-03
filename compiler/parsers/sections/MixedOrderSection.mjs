import ParseSection from "./ParseSection";

export default class MixedOrderSection extends ParseSection {
    test(tokens) {
        let {i} = tokens;
        return this.getSections(tokens).length > 0;
    }

    getSections(tokens, sections = this.sections) {
        let parseSections = [], {i} = tokens;

        for (let i = 0; i < sections.length > 0;) {
            let section = sections[i];


            let {i: tI} = tokens,
                test = this.test(tokens, section);

            if (test) {
                sections = sections.filter((value, sI) => {
                    return sI !== i;
                });

                parseSections.push(section);

                i = 0;
            } else {
                tokens.i = tI;
                i++
            }
        }

        return parseSections;
    }
}