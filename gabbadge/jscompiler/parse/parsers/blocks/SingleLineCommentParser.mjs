import Parser from "../Parser"
import ForwardSlash from "../../tokens/ForwardSlash";
import LSBracket from "../../tokens/LSBracket";
import LBracket from "../../tokens/LBracket";
import LSqBracket from "../../tokens/LSqBracket";
import Dot from "../../tokens/Dot";
import ArgumentParser from "../statements/ArgumentParser";
import Identifier from "../../tokens/Identifier";
import Exclamation from "../../tokens/Exclamation";
import Asterisk from "../../tokens/Asterisk";
import {log} from "../../../../language/helpers";
import NewLine from "../../tokens/NewLine";


export default class SingleLineCommentParser extends Parser {
    parse() {
        this.skip(2);

        do {
            let cT = this.currentToken;
            if (this.end) break;
            this.addToken(cT);
        } while (this.nextToken !== null) ;
    }

    get end() {
        return this.currentToken.is(NewLine);
    }
}

SingleLineCommentParser
    .considerSpaces = true;
SingleLineCommentParser
    .tests = [
    ForwardSlash,
    ForwardSlash
];