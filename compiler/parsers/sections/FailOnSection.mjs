import ParseSection from "./ParseSection";

export default class FailOnSection extends ParseSection {
    test(tokens, sections = this.sections) {

        let {i} = tokens.i;

        // if section one test fails return a fail by default

        if (!this.constructor.test(tokens, sections[0])) return false;

        let i1 = tokens.i,
            test = this.constructor.test(tokens, sections[1]);

        if (test) {
            tokens.i = i;
            return false;
        }

        tokens.i = i1;

        return true
    }

}