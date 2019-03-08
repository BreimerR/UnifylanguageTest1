import Parser from "../Parser";
import Equals from "../../tokens/characters/Equals";
import Exclamation from "../../tokens/characters/Exclamation";

export default class NotExactlyEqualsParser extends Parser {

}

NotExactlyEqualsParser.sections = [
    Exclamation,
    Equals,
    Equals
];