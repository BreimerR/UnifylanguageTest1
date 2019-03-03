import Parser from "../Parser";
import PropertyStart from "../../ast/statements/PropertyStart";
import AlternativeSection from "./AlternativeSection";
import OptionalMixedOrderSections from "./OptionalMixedOrderSections";

export default class PropertyStartParser extends Parser {

}

PropertyStartParser.statement = PropertyStart;

PropertyStartParser.sections = [
    new OptionalMixedOrderSections(
        new AlternativeSection("public", "protected", "private"),
        "static",
        "final"
    )
];