import Parser from "../Parser";
import SimpleIdentifierParser from "./SimpleIdentifierParser";
import ObjectBodyParser from "./ObjectBodyParser";
import Equals from "../../tokens/characters/Equals";


/** @description
 * key,value pairs,
 * functions
 * */
export default class ObjectParser extends Parser{

}


ObjectParser.sections = [
    new SimpleIdentifierParser,
    Equals,
    new ObjectBodyParser
];