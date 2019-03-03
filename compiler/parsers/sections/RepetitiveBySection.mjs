import ZeroOrManySections from "./ZeroOrManySections";
import ParseSection from "./ParseSection";

export default class RepetitiveBySection extends ParseSection {
    constructor(by, section) {
        super(
            section,
            new ZeroOrManySections(
                by,
                section
            )
        );

    }

}