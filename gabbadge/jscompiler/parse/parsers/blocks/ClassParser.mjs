import Parser from "../Parser";
import Keyword from "../../tokens/Keyword";

export default class ClassParser extends Parser {

}

ClassParser.tests = [
    {class: Keyword},
];

ClassParser.considerSpaces = false;