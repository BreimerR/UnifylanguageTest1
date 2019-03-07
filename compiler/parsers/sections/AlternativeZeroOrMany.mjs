import ZeroOrManySections from "./ZeroOrManySections";
import AlternativeSection from "./AlternativeSection";

export default class AlternativeZeroOrMany extends ZeroOrManySections {
    constructor(...sections) {
        super(new AlternativeSection(...sections))
    }
}