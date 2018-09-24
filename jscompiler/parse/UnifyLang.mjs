import Splitter from "../../language/lexer/Spliter";
import fs from 'fs';
import {isDefined, log} from "../../language/helpers";
import Identifier from "./tokens/Identifier";
import Keyword from "./tokens/Keyword";
import UnifyNumber from "./tokens/UnifyNumber";
import And from "./tokens/And";
import Asterisk from "./tokens/Asterisk";
import At from "./tokens/At";
import BackSlash from "./tokens/BackSlash";
import Colon from "./tokens/Colon";
import Coma from "./tokens/Coma";
import DExclamation from "./tokens/DExclamation";
import Dollar from "./tokens/Dolar";
import Dot from "./tokens/Dot";
import Equals from "./tokens/Equals";
import Exclamation from "./tokens/Exclamation";
import ForwardSlash from "./tokens/ForwardSlash";
import GreaterThan from "./tokens/GreaterThan";
import Hash from "./tokens/Hash";
import LBracket from "./tokens/LBracket";
import LessThan from "./tokens/LessThan";
import LSBracket from "./tokens/LSBracket";
import LSqBracket from "./tokens/LSqBracket";
import Minus from "./tokens/Minus";
import NewLine from "./tokens/NewLine";
import Percent from "./tokens/Percent";
import Pipe from "./tokens/Pipe";
import Plus from "./tokens/Plus";
import Question from "./tokens/Question";
import RSBracket from "./tokens/RSBracket";
import RBracket from "./tokens/RBracket";
import SColon from "./tokens/SColon";
import SingleExclamation from "./tokens/SingleExclamation";
import Space from "./tokens/Space";
import Tab from "./tokens/Tab";
import TExclamation from "./tokens/TExclamation";
import UCaret from "./tokens/UCaret";
import Underscore from "./tokens/Underscore";
import DeclarationIdentifier from "./tokens/DeclarationIdentifier";
import SqLine from "./tokens/SqLine";
import ArgumentParser from "./parsers/statements/ArgumentParser";
import FunctionParser from "./parsers/blocks/FunctionParser";
import UnexpectedToken from "./exceptions/UnexpectedToken"
import RSqBracket from "./tokens/RSqBracket";
import ClassParser from "./parsers/blocks/ClassParser";
import IFParser from "./parsers/blocks/IFParser";
import Language from "../../language/Language"
import MultiLineCommentParser from "./parsers/blocks/MultiLineCommentParser";
import SingleLineCommentParser from "./parsers/blocks/SingleLineCommentParser";

class UnifyLang extends Language {
    constructor(code) {
        super(code);
        // skip states
        this.skipNewLine = false;
        this.skipSpaces = false;
        this.skipTabs = false;
        this.code = code;
        this.tokenTypes = [
            And, Asterisk, At, BackSlash, Colon, Coma, DeclarationIdentifier, DExclamation, Dollar, Dot,
            Equals, Exclamation, ForwardSlash, SqLine, GreaterThan, Hash, LBracket, LessThan, LSBracket,
            LSqBracket, RSqBracket, Minus, NewLine, Percent, Pipe, Plus, Question, RSBracket, RBracket,
            SColon, SingleExclamation, Space, Tab, TExclamation, UCaret, Underscore, UnifyNumber, Keyword,
            Identifier
        ];
        // top level parsers only
        this.parsers = [ClassParser, ArgumentParser, IFParser, SingleLineCommentParser, MultiLineCommentParser];
    }


    // use the specified token and go to the next section.
    consume(token) {

    }

    get abstractSyntaxTree() {
        if (this.tokenize) {
            while (this.nextToken) {
                let parser = this.parser;

                parser.parse();
            }
        }
    }

}


let file = "app/controllers/base/App";
let example = "../examples/Class";
let f = `../examples/Offersgalore/unify/${file}`;
let save = `../examples/Offersgalore/php/${file}`;
let code = fs.readFileSync(`${example}.u`, `UTF-8`);
let parser = new UnifyLang(code);
let abstructSyntaxTree = parser.abstractSyntaxTree;
//parser.convert("php", save);