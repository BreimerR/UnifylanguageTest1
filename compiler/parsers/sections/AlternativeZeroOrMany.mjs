import ZeroOrManySections from "./ZeroOrManySections";
import AlternativeSection from "./AlternativeSection";

export default class AlternativeZeroOrMany extends ZeroOrManySections {
    constructor(...sections) {
        super(new AlternativeSection(...sections))
    }

    parse(tokens) {
        let sections = this.sections[0].sections[0].sections;
        return this.sections[0].sections[0].getSection(tokens.copy,sections)
    }
}