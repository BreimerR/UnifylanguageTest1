import Language from "../language/Language"
import Splitter from "../language/parsers/Splitter";
import And from "./tokens/characters/And";
import Asterisk from "./tokens/characters/Asterisk";
import At from "./tokens/characters/At";
import BackSlash from "./tokens/characters/BackSlash";
import Colon from "./tokens/characters/Colon";
import Coma from "./tokens/characters/Coma";
import DExclamation from "./tokens/characters/DExclamation";
import Dollar from "./tokens/characters/Dollar";
import Dot from "./tokens/characters/Dot";
import Equals from "./tokens/characters/Equals";
import Exclamation from "./tokens/characters/Exclamation";
import ForwardSlash from "./tokens/characters/ForwardSlash";
import GreaterThan from "./tokens/characters/GreaterThan";
import Hash from "./tokens/characters/Hash";
import Identifier from "./tokens/identifiers/Identifier";
import LBracket from "./tokens/characters/LBracket";
import LessThan from "./tokens/characters/LessThan";
import LSBracket from "./tokens/characters/LSBracket";
import LSqBracket from "./tokens/characters/LSqBracket";
import Minus from "./tokens/characters/Minus";
import NewLine from "./tokens/characters/NewLine";
import Percent from "./tokens/characters/Percent";
import Pipe from "./tokens/characters/Pipe";
import Plus from "./tokens/characters/Plus";
import Question from "./tokens/characters/Question";
import RBracket from "./tokens/characters/RBracket";
import RSBracket from "./tokens/characters/RSBracket";
import RSqBracket from "./tokens/characters/RSqBracket";
import SColon from "./tokens/characters/SColon";
import SingleExclamation from "./tokens/characters/SingleExclamation";
import Space from "./tokens/characters/Space";
import SqLine from "./tokens/characters/SqLine";
import Tab from "./tokens/characters/Tab";
import TExclamation from "./tokens/characters/TExclamation";
import Token from "./tokens/Token";
import UCaret from "./tokens/characters/UCaret";
import Underscore from "./tokens/characters/Underscore";
import UnifyNumber from "./tokens/characters/UnifyNumber";
import UnifyError from "./errors/UnifyError";
import UnifySyntaxError from "./errors/syntax/UnifySyntaxError";
import UnregisteredToken from "../language/errors/tokens/UnregisteredToken"
import Tokens from "./ast/Tokens"
import DeclarationIdentifier from "./tokens/identifiers/DeclarationIdentifier";
import SimpleVariableParser from "./parsers/SimpleVariableParser";


//TODO
/*
* define what a language is
* get whats common in most languages.
* know what is unique in a specific language
* and how to deal with the unique feature.
* why is it unique is it,
* unique in a good way or is is just a redundant feature of the language.
* */

// during parsing i push statements into the base ast
// i.e DeclarationStatement, FunctionDeclaration, ClassDeclarationStatement

export default class Unify extends Language {
    constructor(code, fileName) {
        super(code, fileName, SimpleVariableParser);
        this.parse();
        //console.log(this.tokens.tokens);
    }

    /**
     * @protected
     * because js supports string reading we should
     * use string checks instead of char reads
     *
     * @param code String
     * @return Tokens
     * */

    tokenize(code) {
        /**
         * get string separated section array
         * replace each string separation with
         * language specific tokens
         * */

        if (code.length < 1) return new Tokens([]);
        code = Splitter.split(code);

        let line = 1, row = 1;

        return new Tokens(code.map(tkString => {
            let tk;
            Unify.tokens.forEach(token => {
                if (tk === undefined && token.test(tkString)) {
                    tk = new token(tkString);
                }
            });


            if (tk instanceof Token) {
                if (tk.is(NewLine)) {
                    line += row = 1
                }

                tk.row = row;
                tk.line = line;

                if (tk.is(Tab)) {
                    row += 3;
                } else row += tkString.length;

                return tk
            }

            throw new UnregisteredToken(tkString)
        }));
    }

    /* Start parsing the*/

    /*
    * For reference of attached items we can parse them
    * but not transpile them in order to get errors of
    * unregistered properties and methods.
    * parse
    * resolve variables and functions
    * */

    /**
     * [start] unify file
     *   preamble toplevelObject* [eof]
     **/
    parse() {

        let {tokens} = this, {hasValidToken} = tokens;
        // gets a token or undefined
        if (!hasValidToken) throw new UnifyError("Please pass code into the language constructor");

        /**
         * hasValidToken checks if there is a next token
         * that is not a space tab or new line indicator
         * */

        /**
         * Constant forward movement.
         * parsers should update this index
         * for the next parser to continue from
         * reached parsed section
         * */
        while (hasValidToken) {
            // get a current parser
            let {parser} = this;

            if (parser === undefined) throw new UnifySyntaxError(tokens.currentToken);



            // reset value to new tokens check
            hasValidToken = tokens.hasValidToken;
        }

        console.log(this.ast);
        // console.log(this.ast)
        // TODO semantic analysis
        // TODO code optimization
        // TODO transpile
    }

    get parser() {
        let {tokens} = this, parsers = this.parsers;

        for (let i in parsers) {
            let parser = parsers[i];
            if (parser.shouldParse(tokens)) return parser
        }

        throw new UnifySyntaxError(tokens.currentToken);
    }

    // uses the AST provided
    propertiesResover() {

    }

    compile(language) {
    }

    phpTranspiler(ast) {

    }
}


// initialize static tokens
Unify.tokens = [
    And,
    Asterisk,
    At,
    BackSlash,
    Colon,
    Coma,
    DExclamation,
    Dollar,
    Dot,
    Equals,
    Exclamation,
    ForwardSlash,
    GreaterThan,
    Hash,
    Identifier,
    DeclarationIdentifier,
    LBracket,
    LessThan,
    LSBracket,
    LSqBracket,
    Minus,
    NewLine,
    Percent,
    Pipe,
    Plus,
    Question,
    RBracket,
    RSBracket,
    RSqBracket,
    SColon,
    SingleExclamation,
    Tab,
    Space,
    SqLine,
    TExclamation,
    UCaret,
    Underscore,
    UnifyNumber
];