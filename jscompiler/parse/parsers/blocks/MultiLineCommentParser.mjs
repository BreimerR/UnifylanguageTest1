import SingleLineCommentParser from "./SingleLineCommentParser"
import ForwardSlash from "../../tokens/ForwardSlash";
import Asterisk from "../../tokens/Asterisk";
import BackSlash from "../../tokens/BackSlash";

export default class MultiLineCommentParser extends SingleLineCommentParser {
    get end() {
        if (this.currentToken.is(Asterisk)) {
            if (this.peek.is(BackSlash)) {
                return true
            }
        }


        return this.currentToken.is(Asterisk) && this.peek.is(BackSlash);

    }
}

MultiLineCommentParser.tests = [
    ForwardSlash,
    Asterisk
];