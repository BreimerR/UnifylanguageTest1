import ParseSection from "./ParseSection";

export default class NonConsumeParseSection extends ParseSection {
    test(tokens) {
        return super.test(tokens, this.sections);
    }

    consumeTokens(tokens) {
        // do not consume tokens here
        return []
    }
}