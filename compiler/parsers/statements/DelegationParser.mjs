import Parser from "../Parser";
import Delegation from "../../ast/statements/Delegation"
import TypeDeclarationParser from "./TypeDeclarationParser";


export default class DelegationParser extends Parser {
}


DelegationParser.statement = Delegation;

DelegationParser.sections = [
    "by",
    new TypeDeclarationParser
];