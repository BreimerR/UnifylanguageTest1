import ParseSection from "./ParseSection";
import OneOrManyParseSection from "./OneOrManyParseSection";
import EndOfFile from "../tokens/characters/EndOfFile";
import OptionalParser from "./OptionalParser";
import SimpleVariableParser from "./SimpleVariableParser";

export default class TopLevelParser extends ParseSection {

}

TopLevelParser.defSections(
    new SimpleVariableParser,
    EndOfFile
);