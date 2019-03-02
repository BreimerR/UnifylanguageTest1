import Parser from "../Parser";
import PropertyDeclaration
    from "../../ast/statements/PropertyDeclaration";
import OptionalParser from "../sections/OptionalParser";

export default class PropertyDeclarationParser extends Parser {

}

PropertyDeclarationParser.statement = PropertyDeclaration;
PropertyDeclarationParser.sections = [
    new MixedOrderParser(
        new AccessModifiersParser,
        new OptionalParser(
            new MixedOrderParser(
                "static", "final"
            )
        )
    )
];