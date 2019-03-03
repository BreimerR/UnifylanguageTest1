import ParseSection from "./ParseSection";

export default class OneOrManySection extends ParseSection {
    test(tokens, sections = this.sections) {
        // test all section once if success test again for
        let {i} = tokens, c = 0;

        while (this.constructor.runTest(tokens, sections)) {
            i = tokens.i;
            c++;
        }

        if (c > 0) {
            tokens.i = i;

            return true
        }


        return false;
    }


}