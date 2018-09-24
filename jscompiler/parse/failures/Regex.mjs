import {isDefined, log} from "../../../language/helpers";

class Regex {
    constructor(...regex) {
        if (regex.length) regex.forEach(v => {
            this.add(v);
        });

        this.name = 'Regex';

        this.regex = {};
        this.rgx = '';
    }

    static mixedOrder(...regex) {

    }

    addGroup(name, ...regex) {

    }

    add(regex, name) {
        // convert to string
        if (regex instanceof RegExp) regex = regex.source;

        this.rgx += regex;
    }

    startOptional(name, regex) {

    }

    closeOptionalSection(name) {

    }

    test(string) {

    }

    // provides all the possible organization of a single string
    static mixer() {

    }

    addOrGroup(name, ...options) {
        for (let option of options) {
            log(option)
        }
    }

    static group(...regex) {
        let g = "(", i = 0;

        for (; i < regex.length; i++) {
            let exp = regex[i];
            if (exp instanceof RegExp) exp = exp.source;
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

    constants(consts) {

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

    static oneOrMany(regex) {
        return new RegExp(regex.source + '+')
    }

    static zeroOrMany(regex) {
        return new RegExp(this.source(regex) + '*');
    }
}

class Language {
    constructor(code) {
        this.code = code;
    }
}


class Unify extends Language {
    static get separation() {
        return Regex.group(Regex.oneOrMany(Regex.space), Regex.oneOrMany(Regex.tab)).source;
    }


    static get identifier() {
        let rgx = Regex.combine(
            Regex.optionalGroup(Regex.oneOrMany(Regex.dolar)),
            Regex.optionalGroup(Regex.oneOrMany(Regex.underscore)),
            Regex.mergeSections(Regex.lCase, Regex.uCase),
            Regex.zeroOrMany(
                Regex.addToSection(
                    //section
                    Regex.mergeSections(Regex.lCase, Regex.uCase, Regex.digit),
                    // addition
                    Regex.combine(
                        Regex.underscore,
                        Regex.dolar
                    )
                )
            )
        );

        return rgx.source;
    }


    get class() {
        return this.constructor;
    }

}


class Block extends Unify {
    constructor() {
        super();
    }

    exec(string) {
        cR.compile();
        if (isDefined(this.regex)) {
            return string.match(new RegExp(this.regex, 'gi'));
        }
    }
}

class ClassBlock extends Block {
    compile() {
        if (!isDefined(this.regex)) {
            this.regex = new RegExp(
                Regex.combine(
                    Regex.group(/class/),
                    Unify.separation,
                    Regex.group(
                        Unify.identifier
                    ),
                    Regex.optionalGroup(
                        Unify.separation
                    ),
                    Regex.lSquiglyBrace,
                    Regex.mixedOrder(

                    )
                )
            );

        }

        log(this.regex.source)
    }
}


let cR = new ClassBlock();
log(cR.exec(`
class App{
    //method declarations
    //grouped declarations
    //properties declarations
    //comments sections
}

class Applications{

}`));



