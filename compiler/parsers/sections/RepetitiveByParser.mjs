import ZeroOrManyParseSections from "./ZeroOrManyParseSections";
import ParseSection from "./ParseSection";

export default class RepetitiveByParser extends ParseSection {
    constructor(by, section) {
        super(
            section,
            new ZeroOrManyParseSections(
                by,
                section
            )
        );

    }

}