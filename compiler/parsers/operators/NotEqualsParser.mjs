import Parser from "../Parser";
import Exclamation from "../../tokens/characters/Exclamation";
import Equals from "../../tokens/characters/Equals";

export default class NotEqualsParser extends Parser{

}

NotEqualsParser.sections = [
    Exclamation,
    Equals
];