import Regex from "../../../../libs/Regex";
import Identifier from "./Identifier";

export default class Keyword extends Identifier {

    static get regex() {
        return Regex.group(...this.keywords);
    }

    static get keywords() {
        return this.k ? this.k : [
            'class',
            'interface',
            'trait',
            'abstract',
            'if',
            'else',
            'elif',
            'switch',
            'case',
            'break',
            'while',
            'when',
            'then',
            'func',
            'method',
            'static',
            'void',
            'private',
            'public',
            'return',
            'throw',
            'throws',
            'init',
            'this'
        ].map(v => Regex.combine(/^/,v,/$/))
    }
}

