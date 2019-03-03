import ParseSection from "./ParseSection";

export default class AlternativeSection extends ParseSection {
    test(tokens) {
        let section = this.getSection(tokens);

        //console.log(section);
        return section !== undefined;
    }

    getSection(tokens, sections = this.sections) {
        for (let sI in sections) {
            let {i} = tokens,
                section = sections[sI];
            let test = this.constructor.test(tokens, section);

            if (test) {
                return section
            } else  {
                tokens.i = i
            }
        }

    }

}