import Parser from "../Parser";
import Colon from "../../tokens/characters/Colon";
import TypeDeclarationParser from "./TypeDeclarationParser";
import ClassExtension from "../../ast/statements/ClassExtension";
import AlternativeSection from "../sections/AlternativeSection";

export default class ClassExtensionParser extends Parser {

}


ClassExtensionParser.statement = ClassExtension;
ClassExtensionParser.sections = [
    new AlternativeSection(
        Colon,
        "extends"
    ),
    new TypeDeclarationParser
];