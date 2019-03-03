import Statement from "./Statement";

export default class EscapeCharacter extends Statement {
}

EscapeCharacter.segments = [
    "backslash",
    "escapedChar"
];