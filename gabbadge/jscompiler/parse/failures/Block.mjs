import {Block as BaseBlock} from "../../language/parser/block/Block";
import {abstractMethodCall, log} from "../../language/helpers";

export default class Block extends BaseBlock {

    get length() {
        return this.regex.length;
    }
}


