import AlternativeSection from "./AlternativeSection";
import ParseSection from "./ParseSection";

export default class OptionalMixedOrderSections extends ParseSection {
    test(tokens, sections = this.sections) {
        this.getSections(tokens, sections);
        return true;
    }

    getSections(tokens, sections) {
        let {i} = tokens, options = [];
        while (sections.length > 0) {
            let section = (new AlternativeSection(...sections)).getSection(tokens);

            if (section === undefined) break;

            i = tokens.i;
            options.push(section);
            // remove found section
            sections = sections.filter(sec => sec !== section);
        }


        // reset index if none of the above is found
        tokens.i = i;


        return options;

    }
}