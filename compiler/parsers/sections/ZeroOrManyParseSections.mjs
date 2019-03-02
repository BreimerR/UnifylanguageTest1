import OptionalParser from "./OptionalParser";
import OneOrManyParseSection from "./OneOrManyParseSection";

export default class ZeroOrManyParseSections extends OptionalParser {
    constructor(...sections){
        super(new OneOrManyParseSection(...sections));
    }
}