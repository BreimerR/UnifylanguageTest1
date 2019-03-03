import OptionalSection from "./OptionalSection";
import OneOrManySection from "./OneOrManySection";

export default class ZeroOrManySections extends OptionalSection {
    constructor(...sections){
        super(new OneOrManySection(...sections));
    }

    test(tokens){
        return super.test(tokens);
    }
}