import Parser from "./Parser";
import AbstractClassBody
    from "../ast/statements/AbstractClassBody";

import AlternativeSection from "./sections/AlternativeSection";
import ParseSection from "./sections/ParseSection";
import LBracket from "../tokens/characters/LBracket";
import RBracket from "../tokens/characters/RBracket";
import LSqBracket from "../tokens/characters/LSqBracket";
import ZeroOrManySections from "./sections/ZeroOrManySections";
import OptionalSection from "./sections/OptionalSection";
import PropertyStartParser from "./sections/PropertyStartParser";
import Identifier from "../tokens/identifiers/Identifier";
import Colon from "../tokens/characters/Colon";
import RepetitiveBySection from "./sections/RepetitiveBySection";
import Pipe from "../tokens/characters/Pipe";
import LSBracket from "../tokens/characters/LSBracket";
import RSBracket from "../tokens/characters/RSBracket";
import SColon from "../tokens/characters/SColon";
import RSqBracket from "../tokens/characters/RSqBracket";
import AbstractClassDeclaration
    from "../ast/statements/AbstractClassDeclaration";
import Coma from "../tokens/characters/Coma";
import Dot from "../tokens/characters/Dot";

import NotSection from "./sections/NotSection";
import Keyword from "../tokens/identifiers/Keyword";
import AbstractionImplementation
    from "../ast/statements/AbstractionImplementation";
import ArgumentStatement
    from "../ast/statements/ArgumentStatement";
import Equals from "../tokens/characters/Equals";
import GreaterThan from "../tokens/characters/GreaterThan";
import ArgumentsList from "../ast/statements/ArgumentsList";
import ArrayDeclaration from "../ast/statements/ArrayDeclaration";
import AssignmentDeclaration
    from "../ast/statements/AssignmentDeclaration";
import ClassBody from "../ast/statements/ClassBody";
import AlternativeZeroOrMany from "./sections/AlternativeZeroOrMany";
import ClassExtension from "../ast/statements/ClassExtension";
import ClassDeclaration from "../ast/statements/ClassDeclaration";
import DefaultValueOrTest
    from "../ast/statements/DefaultValueOrTest";
import Delegation from "../ast/statements/Delegation";
import ForwardSlash from "../tokens/characters/ForwardSlash";
import Tab from "../tokens/characters/Tab";
import Space from "../tokens/characters/Space";
import NewLine from "../tokens/characters/NewLine";
import FailOnSection from "./sections/FailOnSection";
import Token from "../tokens/Token";
import EndOfFileStatement
    from "../ast/statements/EndOfFileStatement";
import EndOfFile from "../tokens/characters/EndOfFile";
import EscapeCharacter from "../ast/statements/EscapeCharacter";
import BackSlash from "../tokens/characters/BackSlash";
import DExclamation from "../tokens/characters/DExclamation";
import SingleExclamation
    from "../tokens/characters/SingleExclamation";
import FunctionBody from "../ast/statements/FunctionBody";
import FunctionDeclaration
    from "../ast/statements/FunctionDeclaration";
import NumberLiteral from "../ast/literals/NumberLiteral";
import UnifyNumber from "../tokens/characters/UnifyNumber";
import PropertyDeclaration
    from "../ast/statements/PropertyDeclaration";
import RangeExpression from "../ast/statements/RangeExpression";
import RegexEscapeCharacter
    from "../ast/statements/RegexEscapeCharacter";
import Dollar from "../tokens/characters/Dollar";
import UCaret from "../tokens/characters/UCaret";
import LessThan from "../tokens/characters/LessThan";
import RegexDeclaration from "../ast/statements/RegexDeclaration";
import StringLiteral from "../ast/literals/StringLiteral";
import TypeDeclaration from "../ast/statements/TypeDeclaration";
import VariableDeclaration
    from "../ast/statements/VariableDeclaration";
import SimpleIdentifierParser
    from "./statements/SimpleIdentifierParser";
import CommentParser from "./statements/CommentParser";
import InterfaceDeclaration
    from "../ast/statements/InterfaceDeclaration";
import InfixOperatorParser from "./operators/InfixOperatorParser";
import SelfParser from "./sections/SelfParser";
import PostfixOperatorParser from "./operators/PostfixOperatorParser";
import PrefixOperatorParser from "./operators/PrefixOperatorParser";
import NegationOperatorParser
    from "./operators/NegationOperatorParser";
import OneOrManySection from "./sections/OneOrManySection";
import Expression from "../ast/statements/Expression";
import Minus from "../tokens/characters/Minus";
import EqualityOperatorParser
    from "./operators/EqualityOperatorParser";
import Hash from "../tokens/characters/Hash";


export class RegexEscapeCharacterParser extends Parser {
}


export class RegexParser extends Parser {

}


export class StringParser extends Parser {

}


export class TypeDeclarationParser extends Parser {


}

export class VariableDeclarationParser extends Parser {

}


export class AbstractClassBodyParser extends Parser {

}

export class PropertyDeclarationParser extends Parser {

}


export class ObjectBodyParser extends Parser {

}

export class NumberParser extends Parser {

}

export class SimplifiedFunctionWithReturnParser extends Parser {

}


export class SimplifiedFunctionParser extends Parser {

}


let simpleName = new SimpleIdentifierParser;

let akaSection = new OptionalSection(
    "aka",
    new RepetitiveBySection(
        Pipe,
        simpleName
    )
);
let returnType = new OptionalSection(
    Colon,
    new RepetitiveBySection(
        Pipe,
        new TypeDeclarationParser()
    )
);
let functionThrowErrorSection = new OptionalSection(
    new AlternativeSection(
        new ParseSection(
            Colon,
            Colon,
        ),
        "throws"
    ),
    new FailOnSection(
        new AlternativeSection(
            new StringParser,
            // TODO could be repetitive by pipe think about
            new RepetitiveBySection(
                Pipe,
                new TypeDeclarationParser
            )
        ),
        LBracket
    )
);

export class FunctionStartParser extends ParseSection {
    constructor() {

        super(
            // name
            simpleName,
            akaSection,
            // return type
            returnType,
            // arguments
            new OptionalSection(
                new ArgumentsParser
            ),
            // thrown errors section here
            functionThrowErrorSection
        )
    }
}

export class PrefixFunctionParser extends Parser {

}

export class InfixFunctionParser extends Parser {
}

export class GetterFunctionParser extends Parser {
}

export class SetterFunctionParser extends Parser {
}

export class LiteralParser extends AlternativeSection {
    constructor() {
        super(
            new ReferenceParser,
            new NumberParser,
            new StringParser,
            new ArrayParser
        );
    }
}

export class InterfaceBodyDeclarationParser extends Parser {

}


export class InterfaceParser extends Parser {

}


export class ObjectParser extends Parser {

}

export class FunctionBodyParser extends Parser {
}

export class FunctionParser extends Parser {

}

export class EscapeCharacterParser extends Parser {

}

export class DefaultValueOrTestParser extends Parser {

}

export class DelegationParser extends Parser {
}


export class EndOfFileParser extends Parser {

}

export class ClassParser extends Parser {

}

export class ClassExtensionParser extends Parser {

}

export class AssignmentParser extends Parser {

}

export class AbstractionImplementationParser extends Parser {
}

export class AbstractClassParser extends Parser {

}

export class ArgumentsParser extends Parser {
}

export class ArgumentDeclarationParser extends Parser {

}

export class ArrayParser extends Parser {

}

export class ClassBodyParser extends Parser {

}

export class RangeExpressionParser extends Parser {

}

export class ArgumentsPassingParser extends Parser {
}

export class PrefixExpressionParser extends SelfParser {

}

export class PostfixExpressionParser extends SelfParser {
}

export class InfixExpressionParser extends SelfParser {

}

export class GroupExpressionParser extends Parser {
}

export class FunctionCallParser extends Parser {

}

export class ReferenceAssignmentParser extends Parser {

}

export class ClassInitializationParser extends Parser {

}

export class ExpressionParser extends AlternativeSection {
    constructor(...sections) {
        if (sections.length === 0) {
            sections = [
                new InfixExpressionParser,
                new PostfixExpressionParser,
                new PrefixExpressionParser,
                new GroupExpressionParser
            ]
        }
        sections.push(
            new FunctionCallParser,
            new ClassInitializationParser
        );
        super(
            ...sections
        )
    }
}

export class ReferenceParser extends Parser {

}

export class IfParser extends Parser {

}

export class SwitchCaseParser extends Parser {

}

export class ForLoopParser extends Parser {

}

export class WhileLoopParser extends Parser {

}

export class DoWhileLoopParser extends Parser {

}

export class RightSideExpressionParser extends Parser {

}


export class LeftSideExpressionParser extends Parser {


}

export class FunctionBodiesParser extends AlternativeSection {
    constructor() {
        super(
            new FunctionBodyParser,
            new SimplifiedFunctionParser,
            new SimplifiedFunctionWithReturnParser
        );

    }

}


let args = new RepetitiveBySection(
    Coma,
    new ArgumentDeclarationParser
);

let varyingArgs = new ParseSection(
    new OptionalSection(
        new TypeDeclarationParser
    ),
    Dot, Dot, Dot, Identifier,
    new OptionalSection(
        new DelegationParser
    )
    ), expressionParser = new ExpressionParser,
    typeDeclarationParser = new TypeDeclarationParser,
    variableDeclarationParser = new VariableDeclarationParser,
    getterFunctionParser = new GetterFunctionParser,
    setterFunctionParse = new SetterFunctionParser,
    argumentDeclarationParser = new ArgumentDeclarationParser,
    simplifiedFunctionWithReturnParser = new SimplifiedFunctionWithReturnParser,
    simplifiedFunctionParser = new SimplifiedFunctionParser,
    literalParser = new LiteralParser,
    functionBodyParser = new FunctionBodyParser,
    switchCaseParser = new SwitchCaseParser,
    infixOperatorParser = new InfixOperatorParser,
    functionBodiesParser = new FunctionBodiesParser;


ReferenceParser.sections = [
    new AlternativeSection(
        new RepetitiveBySection(
            Dot,
            Identifier
        ),
        Identifier
    )
];

VariableDeclarationParser.statement = VariableDeclaration;

VariableDeclarationParser.sections = [
    // Type declaration or a Dollar
    new AlternativeSection(
        new ParseSection(
            new TypeDeclarationParser,
            new OptionalSection(
                Pipe,
                new TypeDeclarationParser
            )
        ),
        Dollar
    ),
    Identifier,
    new OptionalSection(
        new DefaultValueOrTestParser
    ),
    new OptionalSection(
        new AssignmentParser
    ),
    new OptionalSection(
        new DelegationParser
    )
];

TypeDeclarationParser.statement = TypeDeclaration;

let typeDeclaration = new TypeDeclarationParser;

let zero = new ZeroOrManySections(
    Pipe,
    typeDeclaration
);

zero.errors = [
    undefined, "expecting a type declaration"
];

let zeroOrManyTypeOrders = new ZeroOrManySections(
    Coma,
    typeDeclaration,
    zero
);

zeroOrManyTypeOrders.errors = [undefined
    , "expecting a type declaration"
];

let optional = new OptionalSection(
    LessThan,
    typeDeclaration,
    zero,
    zeroOrManyTypeOrders,
    GreaterThan
);

optional.errors = [undefined, "Expecting at least one type declaration "];

TypeDeclarationParser.sections = [
    new SimpleIdentifierParser,
    optional,
    new OptionalSection(
        LSBracket,
        new OptionalSection(
            new AlternativeSection(
                // array length
                UnifyNumber,
                // array order
                new RepetitiveBySection(
                    Coma,
                    new TypeDeclarationParser
                )
            )
        ),
        RSBracket
    )
];


TypeDeclarationParser.errors = [
    "A Keyword can not be a valid type"
];


// noinspection JSUnresolvedVariable
StringParser.considerSpaces = true;
StringParser.statement = StringLiteral;
StringParser.sections = [
    new ZeroOrManySections(
        new AlternativeSection(
            Tab, Space, NewLine
        )
    ),
    DExclamation,
    new ZeroOrManySections(
        new AlternativeSection(
            new EscapeCharacterParser,
            new NotSection(Token, DExclamation)
        )
    ),
    DExclamation
];

StringParser.errors = {
    2: "Token is not expected inside a string"
};


// noinspection JSUnresolvedVariable
RegexParser.considerSpaces = true;
RegexParser.statement = RegexDeclaration;
/*simpleRegex = /breimer\//;*/
RegexParser.sections = [
    new AlternativeZeroOrMany(
        Space, Tab, NewLine
    ),
    ForwardSlash,
    new NotSection(Token, ForwardSlash),
    new ZeroOrManySections(
        new AlternativeSection(
            // avoid \/ being an end
            new RegexEscapeCharacterParser,
            new NotSection(
                Token,
                // we consider spaces but do not use them
                // just for end purposes
                Space,
                Tab,
                NewLine,
                ForwardSlash
            )
        )
    ),
    ForwardSlash
];

RegexEscapeCharacterParser.statement = RegexEscapeCharacter;

/*let regex = /\$\.\,\`\@\#<>/;*/
RegexEscapeCharacterParser.sections = [
    BackSlash,
    new AlternativeSection(
        ForwardSlash,
        Dollar,
        UCaret,
        //DCaret
        LessThan
    )
];


RangeExpressionParser.statement = RangeExpression;

/*
*  additiveExpression '..' additiveExpression
* */
let rangeParts = new AlternativeSection(
    new NumberParser,
    new ReferenceParser,
    new FunctionCallParser
);
RangeExpressionParser.sections = [
    rangeParts,
    Dot,
    Dot,
    rangeParts
];


PropertyDeclarationParser.statement = PropertyDeclaration;
PropertyDeclarationParser.sections = [
    new NotSection(Identifier, Keyword),
    new AlternativeSection(
        new ParseSection(
            new AssignmentParser,
            new DelegationParser
        ),
        new DelegationParser,
        new AssignmentParser,
    ),
    new OptionalSection(SColon)
];


ObjectParser.sections = [
    new SimpleIdentifierParser,
    Equals,
    new ObjectBodyParser
];


NumberParser.statement = NumberLiteral;

let simpleNumber = new ParseSection(
    UnifyNumber,
    new OptionalSection(
        Dot,
        UnifyNumber
    ),
    new OptionalSection(
        new AlternativeSection(
            "E",
            "B",
            "b",
            new ParseSection(
                "m", "b"
            ),
            new ParseSection(
                "g", "b"
            ),
        )
    )
);

NumberParser.sections = [

    simpleNumber,
    new OptionalSection(
        "e",
        simpleNumber
    )
];


ObjectBodyParser.sections = [
    LSqBracket,
    new OptionalSection(
        new RepetitiveBySection(
            Coma,
            new AlternativeSection(
                new ParseSection(
                    new AlternativeSection(
                        UnifyNumber, Identifier,
                        new StringParser
                    ),
                    Colon,
                    new AlternativeSection(
                        new LiteralParser,
                        new ExpressionParser
                    )
                ),
                getterFunctionParser,
                setterFunctionParse,
                new FunctionParser,
                new CommentParser,
            )
        )
    ),
    RSqBracket
];

InterfaceParser.statement = InterfaceDeclaration;

InterfaceParser.sections = [
    "interface",
    new NotSection(Identifier, Keyword),
    new OptionalSection(
        Colon,
        new TypeDeclarationParser,
        new ZeroOrManySections(
            Coma,
            new TypeDeclarationParser
        )
    ),
    new OptionalSection(
        new InterfaceBodyDeclarationParser
    )
];


FunctionBodyParser.statement = FunctionBody;

FunctionBodyParser.sections = [
    LSqBracket,
    new AlternativeZeroOrMany(
        new CommentParser,
        new VariableDeclarationParser,
        new IfParser,
        switchCaseParser,
        new ParseSection(
            new AlternativeSection(
                new ReferenceAssignmentParser,
                new ExpressionParser
            ),
            new OptionalSection(
                SColon
            )
        )
    ),
    RSqBracket
];


FunctionParser.statement = FunctionDeclaration;
FunctionParser.sections = [
    new FunctionStartParser,
    new AlternativeSection(
        simplifiedFunctionWithReturnParser,
        simplifiedFunctionParser,
        new FunctionBodyParser
    )
];
let prefixFunctionStart = new ParseSection(
    "prefix",
    simpleName,
    akaSection,
    new AlternativeSection(
        new ArgumentDeclarationParser,
        new ParseSection(
            LBracket,
            new ArgumentDeclarationParser,
            RBracket
        )
    )
);

PrefixFunctionParser.sections = [
    prefixFunctionStart,
    functionThrowErrorSection,
    new AlternativeSection(
        simplifiedFunctionWithReturnParser,
        simplifiedFunctionParser,
        new FunctionBodyParser
    )
];

let infixFunctionStart = new ParseSection(
    "infix",
    new AlternativeSection(
        new ParseSection(
            argumentDeclarationParser,
            simpleName,
            akaSection,
            returnType,
            argumentDeclarationParser,
            functionThrowErrorSection
        ),

        new ParseSection(
            simpleName,
            akaSection,
            returnType,
            LBracket,
            argumentDeclarationParser,
            Coma,
            argumentDeclarationParser,
            RBracket,
            functionThrowErrorSection
        )
    ),
);

InfixFunctionParser.sections = [
    infixFunctionStart,
    new AlternativeSection(
        simplifiedFunctionWithReturnParser,
        simplifiedFunctionParser,
        new FunctionBodyParser
    )
];

GetterFunctionParser.sections = [
    "get",
    simpleName,
    returnType,
    functionThrowErrorSection,
    new AlternativeSection(
        simplifiedFunctionWithReturnParser,
        new FunctionBodyParser
    ),
];

SetterFunctionParser.sections = [
    "set",
    new OptionalSection(
        new FailOnSection(
            new TypeDeclarationParser,
            LSqBracket
        )
    ),
    simpleName,
    returnType,
    functionThrowErrorSection,
    new AlternativeSection(
        simplifiedFunctionWithReturnParser,
        simplifiedFunctionParser,
        new FunctionBodyParser
    ),

];

EscapeCharacterParser.statement = EscapeCharacter;
EscapeCharacterParser.sections = [
    BackSlash,
    new AlternativeSection(
        DExclamation,
        SingleExclamation
    )
];

// noinspection JSUnresolvedVariable
EndOfFileParser.considerSpaces = false;
EndOfFileParser.statement = EndOfFileStatement;
EndOfFileParser.sections = [EndOfFile];


DelegationParser.statement = Delegation;

DelegationParser.sections = [
    "by",
    new TypeDeclarationParser
];


DefaultValueOrTestParser.statement = DefaultValueOrTest;
DefaultValueOrTestParser.sections = [
    Colon,
    new AlternativeSection(
        new RightSideExpressionParser,
        new LiteralParser
    )
];


ClassParser.statement = ClassDeclaration;

ClassParser.sections = [
    new OptionalSection(
        "closed"
    ),
    "class",
    new TypeDeclarationParser,
    new OptionalSection(
        LBracket,
        new AlternativeSection(
            new ParseSection(
                new OptionalSection(
                    new PropertyStartParser,
                    varyingArgs
                ),
                Coma,
                new ParseSection(
                    new PropertyStartParser,
                    args
                ),
            ),
            new ParseSection(
                new ParseSection(
                    new PropertyStartParser,
                    args
                ),
                Coma,
                new OptionalSection(
                    new PropertyStartParser,
                    varyingArgs
                )
            ),
            new ParseSection(
                new PropertyStartParser,
                varyingArgs
            ),
            new ParseSection(
                new PropertyStartParser,
                args
            ),
        ),
        RBracket
    ),
    new OptionalSection(
        new ClassExtensionParser,
    ),
    new OptionalSection(
        // covers interfaces and  abstract classes
        new AbstractionImplementationParser
    ),
    new OptionalSection(
        new ClassBodyParser
    )
];


ClassExtensionParser.statement = ClassExtension;
ClassExtensionParser.sections = [
    new AlternativeSection(
        Colon,
        "extends"
    ),
    new TypeDeclarationParser,
    new OptionalSection(
        LBracket,
        new OptionalSection(
            new RepetitiveBySection(
                Coma,
                new AlternativeSection(
                    new ExpressionParser,
                    new LiteralParser
                )
            )
        ),
        RBracket
    )
];


ArgumentsPassingParser.sections = [
    LBracket,
    new OptionalSection(
        new RepetitiveBySection(
            Coma,
            new AlternativeSection(
                expressionParser,
                new LiteralParser,
            )
        )
    ),
    RBracket
];
ClassBodyParser.statement = ClassBody;

ClassBodyParser.sections = [
    LSqBracket,
    new AlternativeZeroOrMany(
        new CommentParser,
        new ParseSection(
            new PropertyStartParser,
            new AlternativeSection(
                new GetterFunctionParser,
                new SetterFunctionParser,
                new InfixFunctionParser,
                new PrefixFunctionParser,
                new FunctionParser,
                new ObjectParser,
                new VariableDeclarationParser,
                new PropertyDeclarationParser
            )
        )
    ),
    RSqBracket
];


AssignmentParser.statement = AssignmentDeclaration;

AssignmentParser.sections = [
    Equals,
    new AlternativeSection(
        expressionParser,
        new RegexParser,
        new ReferenceParser,
        new LiteralParser,
        new ObjectBodyParser
    )
];


ArrayParser.statement = ArrayDeclaration;

/*
* [1 "",a.length 3]
*
* [1,2,3,4]
* []
*
* */
ArrayParser.sections = [
    LSBracket,
    new OptionalSection(
        new RepetitiveBySection(
            Coma,
            new AlternativeZeroOrMany(
                new ExpressionParser,
                new LiteralParser
            )
        )
    ),
    RSBracket
];


ArgumentsParser.statement = ArgumentsList;


ArgumentsParser.sections = [
    LBracket,
    new AlternativeSection(
        new ParseSection(
            new OptionalSection(varyingArgs), Coma, args
        ),
        new ParseSection(
            args, Coma, new OptionalSection(varyingArgs)
        ),
        varyingArgs,
        args,
    ),
    RBracket
];


ArgumentDeclarationParser.statement = ArgumentStatement;


/*
* func(func()=>Int){
*
* }
* */

let functionArgument = new ParseSection(
    Identifier,
    new OptionalSection(
        LBracket,
        new RepetitiveBySection(
            Coma,
            new TypeDeclarationParser
        ),
        RBracket
    ),
    Equals,
    GreaterThan,
    new TypeDeclarationParser
);


ArgumentDeclarationParser.sections = [
    new AlternativeSection(
        functionArgument,
        variableDeclarationParser,
        new AlternativeSection(
            new ParseSection(
                "this", Dot, new RepetitiveBySection(Dot, Identifier),
                new AssignmentParser
            ),
            new ParseSection(
                Identifier,
                new AssignmentParser
            )
        )
    )
];

AbstractionImplementationParser.statement = AbstractionImplementation;

AbstractionImplementationParser.sections = [
    new AlternativeSection(
        new ParseSection(
            Colon,
            Colon
        ),
        "implements"
    ),
    new RepetitiveBySection(
        Coma,
        new ParseSection(
            new TypeDeclarationParser,
            new OptionalSection(
                new ArgumentsPassingParser
            )
        )
    )
];


AbstractClassParser.statement = AbstractClassDeclaration;

let extensions = new RepetitiveBySection(
    Coma,
    new TypeDeclarationParser
);

AbstractClassParser.sections = [
    "abstract",
    // name
    new NotSection(Identifier, Keyword),
    new OptionalSection(
        LBracket,
        new AlternativeSection(
            new ParseSection(
                new OptionalSection(
                    new OptionalSection(
                        new PropertyStartParser
                    ), varyingArgs
                ), Coma,
                new ParseSection(
                    new OptionalSection(
                        new PropertyStartParser
                    ), args
                )
            ),
            new ParseSection(
                new ParseSection(
                    new OptionalSection(
                        new PropertyStartParser
                    ), args
                ), Coma,
                new OptionalSection(
                    new OptionalSection(
                        new PropertyStartParser
                    ), varyingArgs
                )
            ),
            new ParseSection(
                new OptionalSection(new PropertyStartParser),
                varyingArgs
            ),
            new ParseSection(
                new OptionalSection(
                    new PropertyStartParser
                ),
                args
            ),
        ),
        RBracket
    ),
    // abstract extensions
    new OptionalSection(
        Colon,
        extensions,
    ),
    new OptionalSection(
        new AbstractClassBodyParser
    )
];

AbstractClassBodyParser.stetement = AbstractClassBody;

let functionStart = new FunctionStartParser;

functionStart.sections[2] = new AlternativeSection(
    new ParseSection(
        LBracket, RBracket
    ),
    new ArgumentsParser
);

AbstractClassBodyParser.sections = [
    LSqBracket,
    new ZeroOrManySections(
        new AlternativeSection(
            new CommentParser,
            new ParseSection(
                new OptionalSection(
                    new PropertyStartParser
                ),
                new AlternativeSection(
                    new AlternativeSection(
                        new ParseSection(
                            "get",
                            Identifier,
                            new OptionalSection(
                                Colon,
                                new RepetitiveBySection(
                                    Pipe,
                                    new TypeDeclarationParser)
                            ),
                            new FunctionBodyParser
                        ),
                        new ParseSection(
                            "set",
                            Identifier,
                            new OptionalSection(
                                Colon,
                                new RepetitiveBySection(
                                    Pipe,
                                    new TypeDeclarationParser)
                            ),
                            LBracket,
                            new VariableDeclarationParser,
                            RBracket,
                            new FunctionBodyParser
                        )
                    ),
                    new VariableDeclarationParser,
                    new ParseSection(
                        "abstract",
                        new AlternativeSection(
                            new ParseSection(
                                new RepetitiveBySection(
                                    Pipe,
                                    new TypeDeclarationParser
                                )
                            ),
                            new ParseSection(
                                LBracket,
                                new RepetitiveBySection(
                                    Pipe,
                                    new TypeDeclarationParser
                                ),
                                RBracket,
                                LSBracket, RSBracket
                            )
                        ),
                        Identifier,
                        new OptionalSection(
                            new DefaultValueOrTestParser
                        ),
                        new OptionalSection(SColon)
                    ),
                    new FunctionParser,
                    new ParseSection(
                        functionStart,
                        new OptionalSection(SColon)
                    )
                )
            )
        )
    ),
    RSqBracket
];


GroupExpressionParser.sections = [
    LBracket,
    new ExpressionParser,
    RBracket
];

PrefixExpressionParser.sections = [
    new OptionalSection(
        new NegationOperatorParser,
    ),
    new PrefixOperatorParser,
    new AlternativeSection(
        new ExpressionParser,
        new LiteralParser
    )
];

InfixExpressionParser.sections = [
    new ExpressionParser(
        new PrefixExpressionParser,
        new GroupExpressionParser,
        new PostfixExpressionParser(
            new GroupExpressionParser,
            new PrefixExpressionParser,
            new LiteralParser,
        ),
        new LiteralParser,
    ),
    new OneOrManySection(
        new InfixOperatorParser,
        new AlternativeSection(
            new ExpressionParser,
            new LiteralParser
        )
    )
];

PostfixExpressionParser.sections = [
    new AlternativeSection(
        new ExpressionParser(
            new GroupExpressionParser,
            new PrefixExpressionParser,
            new InfixExpressionParser(
                new GroupExpressionParser,
                new PrefixExpressionParser,
                new LiteralParser,
            )
        ),
        new LiteralParser
    ),
    new PostfixOperatorParser
];


FunctionCallParser.sections = [
    new ReferenceParser(),
    new ArgumentsPassingParser
];

ReferenceAssignmentParser.sections = [
    new ReferenceParser,
    new AssignmentParser
];

ClassInitializationParser.sections = [
    "new",
    new TypeDeclarationParser,
    new ArgumentsParser
];

SimplifiedFunctionWithReturnParser.sections = [
    Equals,
    GreaterThan,
    new AlternativeSection(
        new FunctionBodyParser,
        new AlternativeSection(
            new ExpressionParser,
            new LiteralParser
        )
    ),
    new OptionalSection(SColon)
];

SimplifiedFunctionParser.sections = [
    Minus,
    GreaterThan,
    new AlternativeSection(
        new ExpressionParser,
        new LiteralParser
    ),
    new OptionalSection(SColon)
];


IfParser.sections = [
    "if",
    new AlternativeSection(
        new ExpressionParser,
        new LiteralParser,
        new ParseSection(
            LBracket,
            new AlternativeSection(
                new ExpressionParser,
                new LiteralParser,
            ),
            RBracket
        )
    ),
    new AlternativeSection(
        new FunctionBodyParser,
        new SimplifiedFunctionWithReturnParser,
        new SimplifiedFunctionParser
    )
];

RightSideExpressionParser.sections = [
    new InfixOperatorParser,
    new AlternativeSection(
        new ExpressionParser,
        new LiteralParser
    )
];

LeftSideExpressionParser.sections = [
    new AlternativeSection(
        new ExpressionParser,
        new LiteralParser
    ),
    new InfixOperatorParser
];

SwitchCaseParser.sections = [
    "switch",
    new AlternativeSection(
        new FailOnSection(
            expressionParser,
            LSqBracket
        ),
        new LiteralParser
    ),
    // operator section whereby default is ==
    new OptionalSection(
        new InfixOperatorParser
    ),
    LSqBracket,
    new OptionalSection(
        new RepetitiveBySection(
            Coma,
            new ParseSection(
                new OptionalSection(
                    new FailOnSection(
                        new InfixOperatorParser,
                        new AlternativeSection(
                            LSqBracket,
                            new ParseSection(
                                Equals,
                                GreaterThan
                            ), new ParseSection(
                                Minus,
                                GreaterThan
                            )
                        )
                    )
                ),
                new AlternativeSection(
                    new RangeExpressionParser,
                    new LiteralParser,
                ),
                functionBodiesParser,
            )
        )
    ),
    RSqBracket
];

DoWhileLoopParser.sections = [
    "do",
    new FunctionBodiesParser,
    "while",
    new AlternativeSection(
        new ParseSection(
            LBracket,
            new AlternativeSection(
                new ExpressionParser,
                new LiteralParser
            ),
            RBracket
        )
    ),
    new OptionalSection(SColon)
];

WhileLoopParser.sections = [
    "while",
    new AlternativeSection(
        new ParseSection(
            LBracket,
            new AlternativeSection(
                expressionParser,
                new LiteralParser
            ), RBracket
        ),
        new AlternativeSection(
            expressionParser,
            new LiteralParser
        )
    ), new FunctionBodiesParser
];
let forStart = new ParseSection(
    new OptionalSection(
        variableDeclarationParser
    ),
    SColon,
    new ExpressionParser,
    new OptionalSection(
        SColon,
        new RepetitiveBySection(
            Coma,
            new ExpressionParser
        )
    )
);

ForLoopParser.sections = [
    "for",
    new AlternativeSection(
        forStart,
        new ParseSection(
            LBracket,
            forStart,
            RBracket
        )
    ),
    functionBodiesParser
];