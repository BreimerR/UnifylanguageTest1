import Parser from "../Parser";

export default class SelfParser extends Parser {
    constructor(...sections) {
        super();
        if (sections.length > 0) {
            this.sections = sections
        }
    }

    shouldParse(tokens) {
        if (this.sections !== undefined) {
            return super.shouldParse(tokens, this.sections)
        }

        return super.shouldParse(tokens, this.constructor.sections)
    }


}
