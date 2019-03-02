import Parser from "../Parser";
import PropertyStart from "../../ast/statements/PropertyStart";
import MixedOrderParser from "./MixedOrderParser";
import AlternativeSectionParser from "./AlternativeSectionParser";
import OptionalParser from "./OptionalParser";

export default class PropertyStartParser extends Parser {

}

PropertyStartParser.statement = PropertyStart;

PropertyStartParser.sections = [
    new MixedOrderParser(
        new AlternativeSectionParser("public", "protected", "private"),

    )
];