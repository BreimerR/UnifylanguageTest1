
export default class Splitter {

    static split(code) {
        if (!code) return console.log("File empty");
        if (this.code === code && this.tkns) return this.tkns;

        this.code = code;
        this.tkns = (new RegExp(this.regex, 'gi'))[Symbol.match](code);
        return this.tkns;
    }


    // breaks everything into an array that we can loop over
    static get regex() {
        if (this.rgx) return this.rgx;
        return this.rgx = `(${Splitter.signs}|${Splitter.identifiers}|${Splitter.digits})`;
    }

    static get signs() {
        return `[\`~!@#$%^&*()\\-_+=|\\\\\\]}{\\["':;?/>.<,\\s\\t\\n\\f\\r]`;
    }

    // regex to get all the existing strings
    static get identifiers() {
        let r = /(\$+)?(_+)?([a-zA-Z][a-zA-Z0-9_]*|_+[a-zA-Z0-9_]*)/;
        return `(\\$+)?(_+)?([a-zA-Z][a-zA-Z0-9_]*|_+[a-zA-Z0-9_]*)`
    }

    static get digits() {
        return `[0-9][0-9]*`;
    }
}


