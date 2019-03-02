import ParseSection from "./ParseSection";

export default class OptionalParser extends ParseSection {

    test(tokens) {
        let {i} = tokens;
        if(!this.actualTest(tokens)) tokens.i = i;
        return true;
    }

    actualTest(tokens) {
        return super.test(tokens);
    }
}

