import NotSection from "../sections/NotSection";
import Identifier from "../../tokens/identifiers/Identifier";
import Keyword from "../../tokens/identifiers/Keyword";

export default class SimpleIdentifierParser extends NotSection {
    constructor() {
        super(Identifier, Keyword);

    }

}