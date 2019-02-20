import Language from "./Language"
import Dot from "../tokens/Dot";
import Equals from "../tokens/Equals";
import Exclamation from "../tokens/Exclamation";
import ForwardSlash from "../tokens/ForwardSlash";
import GreaterThan from "../tokens/GreaterThan";
import Hash from "../tokens/Hash";
import LBracket from "../tokens/LBracket";
import LessThan from "../tokens/LessThan";
import LSBracket from "../tokens/LSBracket";
import And from "../tokens/And";
import Asterisk from "../tokens/Asterisk";
import At from "../tokens/At";
import BackSlash from "../tokens/BackSlash";
import Colon from "../tokens/Colon";
import Coma from "../tokens/Coma";
import DeclarationIdentifier from "../tokens/DeclarationIdentifier";
import DExclamation from "../tokens/DExclamation";
import Identifier from "../../jscompiler/parse/failures/Identifier";
import LSqBracket from "../tokens/LSqBracket";
import Minus from "../tokens/Minus";
import NewLine from "../tokens/NewLine";
import Percent from "../tokens/Percent";
import Pipe from "../tokens/Pipe";
import Plus from "../tokens/Plus";
import Question from "../tokens/Question";
import RBracket from "../tokens/RBracket";
import RSBracket from "../tokens/RSBracket";
import RSqBracket from "../tokens/RSqBracket";
import SColon from "../tokens/SColon";
import SingleExclamation from "../tokens/SingleExclamation";
import Space from "../tokens/Space";
import Splitter from "../../../language/parsers/Splitter";
import SqLine from "../tokens/SqLine";
import Tab from "../tokens/Tab";
import TExclamation from "../tokens/TExclamation";
import UCaret from "../tokens/UCaret";
import Underscore from "../tokens/Underscore";
import UnifyNumber from "../tokens/UnifyNumber";
import Catch from "../tokens/keywords/Catch";
import ClassKeyword from "../tokens/keywords/ClassKeyword";
import IfKeyWord from "../tokens/keywords/IfKeyWord";
import ThenKeyWord from "../tokens/keywords/ThenKeyWord";
import Throw from "../tokens/keywords/Throw";
import When from "../tokens/keywords/When";
import Dollar from "../tokens/Dollar";


export default class Unify extends Language {

    constructor(code) {
        super(code,[
            And,
            Asterisk,
            At,
            BackSlash,
            Colon,
            Coma,
            DeclarationIdentifier,
            DExclamation,
            Dollar,
            Dot,
            Equals,
            Exclamation,
            ForwardSlash,
            GreaterThan,
            Hash,
            Identifier,
            LBracket,
            LessThan,
            LSBracket,
            LSqBracket,
            Minus,
            NewLine,
            Operator,
            Percent,
            Pipe,
            Plus,
            Question,
            RBracket,
            RSBracket,
            RSqBracket,
            SColon,
            SingleExclamation,
            Space,
            Splitter,
            SqLine,
            Tab,
            TExclamation,
            UCaret,
            Underscore,
            UnifyNumber,
            Catch,
            ClassKeyword,
            IfKeyWord,
            ThenKeyWord,
            Throw,
            When
        ], [ClassParser, IfParser, StatementParser]);
    }
}