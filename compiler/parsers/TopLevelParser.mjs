import ParseSection from "./sections/ParseSection";
import EndOfFile from "../tokens/characters/EndOfFile";
import CommentParser from "./statements/CommentParser";
import AlternativeZeroOrMany from "./sections/AlternativeZeroOrMany";
import {
    VariableDeclarationParser,
    ClassParser,
    FunctionParser,
    AbstractClassParser,
    ObjectParser,
    InfixFunctionParser,
    PrefixFunctionParser,
    ReferenceAssignmentParser,
    IfParser,
    SwitchCaseParser,
    WhileLoopParser,
    DoWhileLoopParser,
    ForLoopParser, FunctionCallParser, ExpressionParser
} from "./Parsers";
import OptionalSection from "./sections/OptionalSection";
import SColon from "../tokens/characters/SColon";
import Parser from "./Parser";


// the main parser should contain all the sections possible in the file
export default class TopLevelParser extends ParseSection {
    // noinspection JSCheckFunctionSignatures
    static parse(tokens, lang, {sections} = this) {
        let parsed = [];
        for (let i in sections) {
            let section = sections[i];

            if (section instanceof Parser) {
                parsed.push(section.parse(tokens))
            } else parsed.push(tokens.nextToken)
        }

        return parsed;
    }
}

TopLevelParser.sections = [
    new AlternativeZeroOrMany(
        new CommentParser,
        new VariableDeclarationParser,
        new ObjectParser,
        new ClassParser,
        new AbstractClassParser,
        new ParseSection(
            new ReferenceAssignmentParser,
            new OptionalSection(
                SColon
            )
        ),
        new IfParser,
        new FunctionCallParser,
        new DoWhileLoopParser,
        new WhileLoopParser,
        new ForLoopParser,
        new SwitchCaseParser,
        new InfixFunctionParser,
        new PrefixFunctionParser,
        new FunctionParser,
        new ExpressionParser,
    ),
    EndOfFile
];

TopLevelParser.errors = [];