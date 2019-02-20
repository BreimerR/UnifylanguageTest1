import Block from "./Block";
import Statement from "./Statement";

export default class Function extends Block {
    get parts() {
        return {start: Identifier}
    }
}