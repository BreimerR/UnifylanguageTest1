import Parser from "../Parser";
import Equals from "../../tokens/characters/Equals";
import GreaterThan from "../../tokens/characters/GreaterThan";

export default class LessThanParser extends Parser{

}


LessThanParser.sections = [
    GreaterThan,
    Equals
];