import AlternativeSection from "../sections/AlternativeSection";
import SingleLineCommentParser from "./SingleLineCommentParser";
import DocCommentParser from "./DocCommentParser";
import MultiLineCommentParser from "./MultiLineCommentParser";

export default class CommentParser extends AlternativeSection {
    constructor() {
        super(
            new SingleLineCommentParser,
            new DocCommentParser,
            new MultiLineCommentParser,
        )
    }
}

