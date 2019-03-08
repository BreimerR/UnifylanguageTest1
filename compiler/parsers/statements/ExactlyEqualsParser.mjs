import Parser from "../Parser";
import Equals from "../../tokens/characters/Equals";

export default class ExactlyEqualsParser extends Parser {
}

ExactlyEqualsParser.sections = [
    Equals,
    Equals,
    Equals
];