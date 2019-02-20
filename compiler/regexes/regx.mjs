class Parser {
    static declareSections(...sections) {

    }
}

class ParseSection {

}

class OneOrManySection extends ParseSection {

}

class NoneOrManySection extends ParseSection {

}

class AlternativeSection extends ParseSection {

}

class RepetitiveSection extends ParseSection {

}

class OptionalSection extends ParseSection {

}

class VariableDeclarationParser extends Parser {

}

VariableDeclarationParser.declareSections(
    new NoneOrManySection(AnnotationParser),
    SimpleVariableDeclarationParser
);

class MultiVariableDeclarationParser extends Parser {

}

MultiVariableDeclarationParser.declareSections(
    new NoneOrManySection(AnnotationParser),
    new RepetitiveSection(SimpleVariableDeclarationParser, Comma),
    new OptionalSection(SColon)
);

class SimpleVariableDeclarationParser extends Parser {

}

SimpleVariableDeclarationParser.declareSections(
    new OptionalSection(TypeParser),
    SimpleIdentifierParser, new OptionalSection(DefaultValueOrTestParser),
    new OptionalSection(AssignmentParser),
    new OptionalSection(PropertyDelegationParser)
);

class AssignmentParser extends Parser {

}

AssignmentParser.declareSections(
    Equals,
);

class PropertyDelegationParser extends Parser {

}

PropertyDelegationParser.declareSections(
    PropertyModifiersParser,
    SimpleIdentifierParser,
);


class PropertyModifiersParser extends Parser {

}

/**
 * (private|public|protected)? static? final? type? methodName returnType? (throw type|StringLiteral)?{
 *
 *
 * }
 * */
PropertyModifiersParser.declareSections(
    new OptionalSection(AccessModifierParser)
);

class AccessModifierParser extends Parser {

}

AccessModifierParser.declareSections(
    "public",
    "protected",
    "private"
);



class TypeParser extends Parser {

}

class DefaultValueOrTestParser extends Parser {

}

DefaultValueOrTestParser.declareSections(
    Colon
);

class SimpleUserTypeParser extends Parser {

}

SimpleUserTypeParser.declareSections(
    SimpleIdentifierParser, new OptionalSection(TypeArgumentsParser)
);

class SimpleIdentifierParser extends Parser {

}

SimpleIdentifierParser.declareSections(
    new AlternativeSection(
        Identifier,
        'abstract',
        'annotation',
        'by',
        'catch',
        'companion',
        'constructor',
        'crossinline',
        'data',
        'dynamic',
        'enum',
        'external',
        'final',
        'finally',
        'get',
        'import',
        'infix',
        'init',
        'inline',
        'inner',
        'internal',
        'lateinit',
        'noinline',
        'open',
        'operator',
        'out',
        'override',
        'private',
        'protected',
        'public',
        'reified',
        'sealed',
        'tailrec',
        'set',
        'vararg',
        'where',
        'expect',
        'actual',
        'const',
        'suspend'
    )
);

class TypeArgumentsParser extends Parser {

}

TypeArgumentsParser.declareSections(
    LessThan,
    new RepetitiveSection(TypeProjectionParser, Comma),
    GreaterThan
);

class TypeProjectionParser extends Parser {

}

TypeProjectionParser.declareSections(
    new AlternativeSection(
        new ParseSection(new OptionalSection(TypeProjectionModifiersParser), TypeParser),
        Asterisk
    )
);

class TypeProjectionModifiersParser extends Parser {

}

TypeProjectionModifiersParser.declareSections(
    new OneOrManySection(TypeProjectionModifierParser)
);

class TypeProjectionModifierParser extends Parser {

}

TypeProjectionModifierParser.declareSections(
    new AlternativeSection(VarianceModifierParser,
        AnnotationParser)
);

class VarianceModifierParser extends Parser {

}

VarianceModifierParser.declareSections(
    new AlternativeSection("in", "out")
);

class AnnotationParser extends Parser {

}

AnnotationParser.declareSections(
    new AlternativeSection(SingleAnnotationParser, MultiAnnotationParser)
);

class SingleAnnotationParser extends Parser {

}

SingleAnnotationParser.declareSections(
    new AlternativeSection(
        new ParseSection(AnnotationUseSiteTargetParser, UnescapedAnnotationParser),
        new ParseSection(At, UnescapedAnnotationParser)
    )
);

class MultiAnnotationParser extends Parser {

}

class GroupedAnnotationParser extends Parser {

}

GroupedAnnotationParser.declareSections(
    LSBracket, new OneOrManySection(UnescapedAnnotationParser), RSBracket
);


MultiAnnotationParser.declareSections(
    new AlternativeSection(
        new ParseSection(AnnotationUseSiteTargetParser, GroupedAnnotationParser),
        new ParseSection(At, UnescapedAnnotationParser)
    )
);

class AnnotationUseSiteTargetParser extends Parser {

}

AnnotationUseSiteTargetParser.declareSections(
    new AlternativeSection(
        new ParseSection(At, "file"),
        new ParseSection(At, "property"),
        new ParseSection(At, "get"),
        new ParseSection(At, "set"),
        new ParseSection(At, "receiver"),
        new ParseSection(At, "param"),
        new ParseSection(At, "setparam"),
        new ParseSection(At, "delegate")
    )
);

class UnescapedAnnotationParser extends Parser {

}

UnescapedAnnotationParser.declareSections(
    new AlternativeSection(ConstructorInvocationParser, UserTypeParser)
);

class ConstructorInvocationParser extends Parser {

}

ConstructorInvocationParser.declareSections(
    "new", UserTypeParser, ValueArgumentsParser
);

class UserTypeParser extends Parser {

}

UserTypeParser.declareSections(
    new RepetitiveSection(SimpleUserTypeParser, Dot)
);

class ValueArgumentsParser extends Parser {

}

ValueArgumentsParser.declareSections();