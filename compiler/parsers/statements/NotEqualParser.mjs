import Parser from "../Parser";
import NotEqual from "../../ast/statements/NotEqual";
import Equals from "../../tokens/characters/Equals";
import Exclamation from "../../tokens/characters/Exclamation";

export default class NotEqualParser extends Parser{

}

NotEqualParser.statement =  NotEqual;
NotEqualParser.sections =  [
    Exclamation,
    Equals
];