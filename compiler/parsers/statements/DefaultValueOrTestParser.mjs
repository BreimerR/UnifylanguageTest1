import Parser from "../Parser";
import AlternativeSection
    from "../sections/AlternativeSection";
import StringParser from "./StringParser";
import Colon from "../../tokens/characters/Colon";
import NumberParser from "./NumberParser";
import DefaultValueOrTest
    from "../../ast/statements/DefaultValueOrTest";

export default class DefaultValueOrTestParser extends Parser {

}

DefaultValueOrTestParser.statement = DefaultValueOrTest;
DefaultValueOrTestParser.sections = [
    Colon,
    new AlternativeSection(
        new StringParser,
        new NumberParser
    )
];