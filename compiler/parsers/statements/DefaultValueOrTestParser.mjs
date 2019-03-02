import Parser from "../Parser";
import AlternativeSectionParser
    from "../sections/AlternativeSectionParser";

export default class DefaultValueOrTestParser extends Parser {

}

DefaultValueOrTestParser.statement = DefaultValueOrTest;
DefaultValueOrTestParser.sections = [
    Colon,
    new AlternativeSectionParser(
        new StringPrser,
        new NumberParser
    )
];