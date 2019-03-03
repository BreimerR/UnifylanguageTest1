import ParseSection from "./ParseSection";

export default class OptionalSection extends ParseSection {

    test(tokens) {
        let {i} = tokens, test = this.actualTest(tokens);
        if (!test) tokens.i = i;
        //console.log(test,tokens.currentToken);
        return true;
    }

    actualTest(tokens) {
        return super.test(tokens);
    }
}

