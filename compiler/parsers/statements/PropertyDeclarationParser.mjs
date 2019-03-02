import Parser from "../Parser";
import PropertyDeclaration
    from "../../ast/statements/PropertyDeclaration";
import OptionalParser from "../sections/OptionalParser";
import MixedOrderParser from "../sections/MixedOrderParser";
import AlternativeSectionParser
    from "../sections/AlternativeSectionParser";

export default class PropertyDeclarationParser extends Parser {

}

PropertyDeclarationParser.statement = PropertyDeclaration;
PropertyDeclarationParser.sections = [
    new PropertyStartParser,
    new MixedOrderParser(
        new AlternativeSectionParser("public", "protected", "private"),
        new OptionalParser(
            new MixedOrderParser(
                "static", "final"
            )
        )
    )

];