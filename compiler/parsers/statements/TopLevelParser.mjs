import ParseSection from "../sections/ParseSection";
import EndOfFile from "../../tokens/characters/EndOfFile";
import Parser from "../Parser";
import OptionalParser from "../sections/OptionalParser";
import OneOrManyParseSection from "../sections/OneOrManyParseSection";
import AlternativeSectionParser
    from "../sections/AlternativeSectionParser";
import VariableDeclarationParser from "./VariableDeclarationParser";
import ZeroOrManyParseSections
    from "../sections/ZeroOrManyParseSections";


// the main parser should contain all the sections possible in the file
export default class TopLevelParser extends ParseSection {
    // noinspection JSCheckFunctionSignatures
    static parse(tokens, lang, {sections} = this) {
        for (let i in sections) {
            let section = sections[i];

            if (section instanceof Parser) {
                lang.push(section.parse(tokens, this))
            } else if (section instanceof ParseSection) {
                lang.push(...section.consumeTokens(tokens, this))
            } else lang.push(tokens.nextToken)
        }
    }
}

TopLevelParser.sections = [
    new ZeroOrManyParseSections(
        new AlternativeSectionParser(
            new VariableDeclarationParser
        )
    ),
    EndOfFile
];

TopLevelParser.errors = [];