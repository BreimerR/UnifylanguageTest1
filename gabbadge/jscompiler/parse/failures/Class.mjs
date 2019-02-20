import Block from "./Block";
import {log} from "../../../language/helpers";
import Regex from "../../../../libs/Regex";

export default class Class extends Block {
    constructor() {
        super();


        this.regex = [
            {keyword: /class/},
            {separation: /[\s\t\n]+/},
            {identifier: Regex.combine(this.identifier)},
        ]
    }

    get identifier() {
        return //
    }

}

