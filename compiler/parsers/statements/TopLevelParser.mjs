import ParseSection from "../sections/ParseSection";
import EndOfFile from "../../tokens/characters/EndOfFile";
import AlternativeSection
    from "../sections/AlternativeSection";
import VariableDeclarationParser from "./VariableDeclarationParser";
import ClassParser from "./ClassParser";
import FunctionParser from "./FunctionParser";
import OptionalSection from "../sections/OptionalSection";
import CommentParser from "./CommentParser";
import AbstractClassParser from "./AbstractClassParser";
import AlternativeZeroOrMany from "../sections/AlternativeZeroOrMany";


// the main parser should contain all the sections possible in the file
export default class TopLevelParser extends ParseSection {
    // noinspection JSCheckFunctionSignatures
    static parse(tokens, lang, {sections} = this) {

    }
}

TopLevelParser.sections = [
    new AlternativeZeroOrMany(
        new CommentParser,
        new VariableDeclarationParser,
        new ClassParser,
        new AbstractClassParser,
        new ParseSection(
            new OptionalSection(
                new AlternativeSection(
                    "infix",
                    "prefix"
                )
            ),
            new FunctionParser
        )
    ),
    EndOfFile
];

TopLevelParser.errors = [];