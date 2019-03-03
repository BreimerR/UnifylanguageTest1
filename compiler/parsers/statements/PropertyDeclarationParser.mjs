import Parser from "../Parser";
import PropertyDeclaration
    from "../../ast/statements/PropertyDeclaration";
import PropertyStartParser from "../sections/PropertyStartParser";
import VariableDeclarationParser from "./VariableDeclarationParser";

export default class PropertyDeclarationParser extends Parser {

}

PropertyDeclarationParser.statement = PropertyDeclaration;
PropertyDeclarationParser.sections = [

    new VariableDeclarationParser
];