import Statement from "./Statement";

export default class SingleLineComment extends Statement {

}

SingleLineComment.segments = [
    "spaces", "ForwardSlash", "ForwardSlash","CommentData"
];