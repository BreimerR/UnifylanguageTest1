import Splitter from "../compiler/tokens/Splitter";
import os from "os"
import sys from "sys"

import UnexpectedEndOfFile from "../exceptions/UnexpectedEndOfFile";


export default class Code {
    constructor(code) {
        this.tokens = Splitter.split(code);
    }

    get currentToken() {

    }

    get cT() { 
        return this.currentToken
    }

    get nextToken() {


        throw new UnexpectedEndOfFile(code);
    }

    get prevToken() {

    }

    get safeNextToken() {

    }

    get copy() {
        return Object.create(this);
    }


}