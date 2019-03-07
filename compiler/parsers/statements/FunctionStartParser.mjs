import ParseSection from "../sections/ParseSection";
import OptionalSection from "../sections/OptionalSection";
import RepetitiveBySection from "../sections/RepetitiveBySection";
import TypeDeclarationParser from "./TypeDeclarationParser";
import Pipe from "../../tokens/characters/Pipe";
import Colon from "../../tokens/characters/Colon";
import ArgumentsParser from "./ArgumentsParser";
import AlternativeSection from "../sections/AlternativeSection";
import StringParser from "./StringParser";
import FailOnSection from "../sections/FailOnSection";
import LBracket from "../../tokens/characters/LBracket";
import SimpleIdentifierParser from "./SimpleIdentifierParser";



export default class FunctionStartParser extends ParseSection {
    constructor() {

        let name =  new SimpleIdentifierParser;
        super(
            // name
            name,
            new OptionalSection(
                "aka",
                new RepetitiveBySection(
                    Pipe,
                    name
                )
            ),
            // return type
            new OptionalSection(
                Colon,
                new RepetitiveBySection(
                    Pipe,
                    new TypeDeclarationParser()
                )
            ),
            // arguments
            new OptionalSection(
                new ArgumentsParser
            ),
            // thrown errors section here
            new OptionalSection(
                new FailOnSection(
                    new AlternativeSection(
                        new StringParser,
                        // TODO could be repetitive by pipe think about
                        new TypeDeclarationParser
                    ),
                    LBracket
                )
            )
        )
    }
}