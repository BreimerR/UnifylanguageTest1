export default class Regex {
    constructor(regex = '', flag = '') {
        this.flag = flag;
        this.regex = regex;
    }

    add(...regex) {
        this.combine(...regex)
    }

    addGroup(name, ...regex) {

    }

    test(string, flag) {
        return new RegExp(this.regex, this.flag).test(string)
    }

    exec(string) {
        return new RegExp(this.regex, this.flag).exec(string)
    }

    combine(...regex) {
        this.regex = Regex.combine(...[this.regex, ...regex]);
    }

    optionGroup(name, ...options) {
        this.regex = Regex.combine(this.regex, Regex.optionalGroup.apply(this, options));
    }

    mixedOrder(name, ...regex) {
        this.regex = Regex.combine(this.regex)
    }

    static mixedOrder(name, ...regex) {

    }

    // provides all the possible organization of a single string
    static mixer(options, i = 0, current = null) {

    }

    static group(...regex) {
        let g = "(", i = 0;

        for (; i < regex.length; i++) {
            let exp = regex[i];
            exp = Regex.source(exp);
            g += exp;

            if (!(i === regex.length - 1)) g += `|`;
        }


        g += ")";
        return new RegExp(g);
    }

    static combine(...regexS) {
        let rgx = "";
        for (let regex of regexS) {
            rgx += this.source(regex)
        }

        return new RegExp(rgx);
    }

    static optionalGroup(...options) {
        return new RegExp(this.group.apply(this, options).source + '?')
    }

    static mergeSections(...sections) {
        let sec = "[";

        for (let section of sections) {
            section = this.sectionContent(section);
            sec += section;
        }

        sec += ']';


        return new RegExp(sec);

    }

    static sectionContent(section) {
        section = this.source(section).trim();
        [, ...section] = section;
        delete section[section.length - 1];
        return section.join('');
    }

    static addToSection(section, addition) {
        return new RegExp(`[` + this.sectionContent(section) + this.source(addition) + `]`)
    }

    static source(regx) {
        return regx instanceof RegExp ? regx.source : regx;
    }

    static word() {
        return Regex.mergeSections(this.lCase, this.uCase)
    }

    static get lCase() {
        return /[a-z]/
    }

    static get uCase() {
        return /[A-Z]/
    }

    static get digit() {
        return /[0-9]/
    }

    static get squigy() {
        return /~/
    }

    static get backTick() {
        return /`/
    }

    static get exclaim() {
        return /!/
    }

    static get at() {
        return /@/
    }

    static get hash() {
        return /#/
    }

    static get dolar() {
        return /\$/
    }

    static get percent() {
        return /%/
    }

    static get upCaret() {
        return /\^/
    }

    static get and() {
        return /&/
    }

    static get asterisc() {
        return /\*/
    }

    static get lBracket() {
        return /\(/
    }

    static get rBracket() {
        return /\)/
    }

    static get dash() {
        return /-/
    }

    static get underscore() {
        return /_/
    }

    static get plus() {
        return /\+/
    }

    static get equals() {
        return /=/
    }

    static get lSBrackets() {
        return /\[/
    }

    static get rSBrackets() {
        return /]/
    }

    static get lSquiglyBrace() {
        return /{/
    }

    static get rSquiglyBrace() {
        return /}/
    }

    static get pipe() {
        return /\|/
    }

    static get slash() {
        return /\\/
    }

    static get colon() {
        return /:/
    }

    static get sColon() {
        return /;/
    }

    static get sMarks() {
        return /"/
    }

    static get sSMarks() {
        return /'/
    }

    static get comma() {
        return /,/
    }

    static get leftCaret() {
        return /</
    }

    static get rCaret() {
        return />/
    }

    static get question() {
        return /\?/
    }

    static get backSlash() {
        return /\//
    }

    static get space() {
        return /\s/
    }

    static get tab() {
        return /\t/
    }

    static get newLine() {
        return /\n/
    }

    static oneOrMany(rgx) {
        return new RegExp(this.source(rgx) + '+')
    }

    static zeroOrMany(rgx) {
        return new RegExp(this.source(rgx) + '*');
    }
}