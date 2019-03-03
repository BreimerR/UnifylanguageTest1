import ParseSection from "../sections/ParseSection";
import EndOfFile from "../../tokens/characters/EndOfFile";
import Parser from "../Parser";
import OptionalMixedOrderSections
    from "../sections/OptionalMixedOrderSections";
import ZeroOrManySections
    from "../sections/ZeroOrManySections";
import AlternativeSection
    from "../sections/AlternativeSection";
import VariableDeclarationParser from "./VariableDeclarationParser";
import StringParser from "./StringParser";
import Coma from "../../tokens/characters/Coma";
import Identifier from "../../tokens/identifiers/Identifier";
import SColon from "../../tokens/characters/SColon";
import ClassParser from "./ClassParser";
import FunctionParser from "./FunctionParser";
import OptionalSection from "../sections/OptionalSection";


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
    new ZeroOrManySections(
        new AlternativeSection(
            new VariableDeclarationParser,
            new ParseSection(
                new OptionalSection(
                    "closed"
                ),
                new ClassParser
            ),
            new ParseSection(
                new OptionalSection(
                    new AlternativeSection(
                        "infix",
                        "prefix"
                    )
                ),
                new FunctionParser
            )
        )
    ),
    EndOfFile
];

TopLevelParser.errors = [];