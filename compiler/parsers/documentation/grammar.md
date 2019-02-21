# Grammar

## Description

### Notation
The notation used on this page corresponds to the ANTLR 4 notation with a few exceptions for better readability:

omitted lexer rule actions and commands,
omitted lexical modes.
Short description:

operator | denotes alternative,
operator * denotes iteration (zero or more),
operator + denotes iteration (one or more),
operator ? denotes option (zero or one),
operator .. denotes range (from left to right),
operator ~ denotes negation.

## Symbols and naming
- Terminal symbol names start with an uppercase letter, e.g. Identifier.
Non-terminal symbol names start with a lowercase letter, e.g. kotlinFile.

- Symbol definitions may be documented with attributes:

start attribute denotes a symbol that represents the whole source file (see kotlinFile and script),
helper attribute denotes a lexer fragment rule (used only inside other terminal symbols).
Also for better readability some simplifications are made:

lexer rules consisting of one string literal element are inlined to the use site,
new line tokens are excluded (new lines are not allowed in some places, see source grammar files for details).
Scope
The grammar corresponds to the latest stable version of the Kotlin compiler excluding lexer and parser rules for experimental features that are disabled by default.

## Syntax

### unifyFile
  : shebangLine? fileAnnotation* packageHeader importList topLevelObject* EOF
  ;
  
### script
  : shebangLine? fileAnnotation* packageHeader importList (statement semi)* EOF
  ;
###### shebangLine ___(used by unifyFile, script)___
  : ShebangLine
  ;
### fileAnnotation ___(used by unifyFile, script)___
  : ANNOTATION_USE_SITE_TARGET_FILE (('[' unescapedAnnotation+ ']') | unescapedAnnotation)
  ;
  
#### packageHeader (used by unifyFile, script)
  : ('package' Identifier{Dot} semi?)?
  ;
  
#### importList ___(used by unifyFile, script)___
  : importHeader*
  ;
  

###### importHeader ___(used by importList)___
- enable for use of alias containers
```
import a.* as Main
```
  : 'import' identifier  ('.' '*' )?  importAlias? semi?
  ;
  
#### importAlias ___(used by importHeader)___
  : 'as' simpleIdentifier
  ;
  
### topLevelObject ___(used by kotlinFile)___
  : declaration semis?
  ;

### typeAlias ___(used by declaration)___
  : modifiers? simpleIdentifier typeParameters? 'typeAlias' type
  ;
  
  

### declaration (used by topLevelObject, classMemberDeclaration, statement)
- objectDeclaration Replaced with abstract class declaration

  : classDeclaration | functionDeclaration | variableDeclaration | typeAlias
  ;
  
## Class
#### classDeclaration ___(used by declaration)___
-If we allow an interface to extend a class it would mean that every class that implements this interface should extend that class
	forced class extensions
	
	removed typeConstraints?
	
  : modifiers? ('abstract'? 'class' | 'interface'| 'enum'| 'singleton') simpleIdentifier typeParameters?
    	primaryConstructor?
    	superClassDeclaration? interfaceImplementations?
    	delegationSpecifiers?
    	(classBody | enumClassBody)?
  ;
  
  
### superClassDeclaration
  : ':' Identifier typeParameters? 
	
  ;

### interfaceImplementations
  : '::' (Identifier typeParameters?){Comma}
  ;

  
#### primaryConstructor ___(used by classDeclaration)___
  : (modifiers? 'constructor')? classParameters
  ;
  
#### classBody ___(used by classDeclaration, companionObject, objectDeclaration, enumEntry, objectLiteral)___
  : '{' classMemberDeclarations '}'
  ;
#### classParameters ___(used by primaryConstructor)___
  : '(' (classParameter (',' classParameter)*)? ')'
  ;

#### classParameter ___(used by classParameters)___
  : modifiers? type simpleIdentifier defaultVariableTestOrValue  ('=' expression)?
  ;
  
### delegationSpecifiers ___(used by classDeclaration, companionObject, objectDeclaration, objectLiteral)___
  : annotatedDelegationSpecifier (',' annotatedDelegationSpecifier)*
  ;
  
#### delegationSpecifier (used by annotatedDelegationSpecifier)
  : explicitDelegation
  | userType
  | functionType
  ;
  
#### constructorInvocation (used by delegationSpecifier, unescapedAnnotation)
  : 'new' userType valueArguments
  ;

#### annotatedDelegationSpecifier (used by delegationSpecifiers)
  : annotation* delegationSpecifier
  ;
  
#### explicitDelegation (used by delegationSpecifier)
  : (userType | functionType) 'by' expression
  ;
See Generic classes

### typeParameters (used by typeAlias, classDeclaration, functionDeclaration, propertyDeclaration)
  : '<' typeParameter (',' typeParameter)* '>'
  ;

#### typeParameter (used by typeParameters)
  : typeParameterModifiers? simpleIdentifier (':' type)?
  ;
See Generic constraints

### typeConstraints (used by classDeclaration, functionDeclaration, propertyDeclaration, anonymousFunction)
  : 'where' typeConstraint (',' typeConstraint)*
  ;
  
#### typeConstraint (used by typeConstraints)
  : annotation* simpleIdentifier ':' type
  ;
  
### Class members
#### classMemberDeclarations ___(used by classBody, enumClassBody)___
  : (classMemberDeclaration semis?)*
  ;

### classMemberDeclaration ___(used by classMemberDeclarations)___
  : declaration
  | classInitializer
  | secondaryConstructor
  ;
  
#### classInitializer ___(used by classMemberDeclaration)___
  : 'init' block
  ;


#### functionValueParameters ___(used by functionDeclaration, secondaryConstructor, anonymousFunction)___
  : '(' (functionValueParameter (',' functionValueParameter)*)? ')'
  ;

### defaultVariableTestOrValue __(variableDeclaration,functionValueDeclaration)__
- if we find a binary operation we assume it 
  : Colon ( simpleIdentifier | Literal |(disjunction | conjunction)| functionOrMethodCall)
  ;
  
### functionValueParameter ___(used by functionValueParameters)___
  : modifiers? parameter ('=' expression)?
  ;

  
### functionDeclaration ___(used by declaration)___
  : modifiers? 'fun' typeParameters?
    (receiverType '.')?
    simpleIdentifier functionValueParameters
    (':' type)? typeConstraints?
    functionBody?
  ;
  
### functionBody ___(used by functionDeclaration, getter, setter, anonymousFunction)___
  : block
  | '=' expression
  ;
  
### simpleVariableDeclaration ___(used by multiVariableDeclaration, propertyDeclaration, forStatement, lambdaParameter, whenSubject)___
  : type? simpleIdentifier  defaultVariableTestOrValue?  variableAssignment? propertyDelegation? 
  ;
  

  
### variableDeclaration 
  : annotation* simpleVariableDeclaration
  ;
#### multiVariableDeclaration ___(used by propertyDeclaration, forStatement, lambdaParameter)___
  : annotation* simpleVariableDeclaration{Comma} semi?
  ;

### propertyDeclaration ___(used by declaration)___
  : modifiers? typeParameters?
    (receiverType '.')?
    (multiVariableDeclaration | variableDeclaration)
    typeConstraints?
    (('=' expression) | propertyDelegate)? ';'?
    ((getter? (semi? setter)?) | (setter? (semi? getter)?))
  ;

### propertyDelegate (used by propertyDeclaration)
  : 'by' expression
  ;
  
#### getter (used by propertyDeclaration)
  : modifiers? 'get'
  | modifiers? 'get' '(' ')'
    (':' type)?
    functionBody
  ;
  
#### setter (used by propertyDeclaration)
  : modifiers? 'set'
  | modifiers? 'set' '(' (annotation | parameterModifier)* setterParameter ')'
    (':' type)?
    functionBody
  ;
  
### setterParameter (used by setter)
  : type? simpleIdentifier 
  ;
  
### parameter (used by functionValueParameter, functionTypeParameters)
  :  type simpleIdentifier
  ;
  
### objectDeclaration __(used by declaration)___
  : modifiers? 'object' simpleIdentifier (':' delegationSpecifiers)? classBody?
  ;
### secondaryConstructor ___(used by classMemberDeclaration)___
  : modifiers? 'constructor' functionValueParameters
    (':' constructorDelegationCall)? block?
  ;
### constructorDelegationCall ___(used by secondaryConstructor)___
  : ('this' | 'super') valueArguments
  ;


### enumClassBody (used by classDeclaration)
  : '{' enumEntries? (';' classMemberDeclarations)? '}'
  ;
  
  
### enumEntries (used by enumClassBody)
  : enumEntry (',' enumEntry)* ','?
  ;
  
### enumEntry (used by enumEntries)
  : modifiers? simpleIdentifier valueArguments? classBody?
  ;


### type (used by typeAlias, classParameter, typeParameter, typeConstraint, functionDeclaration, variableDeclaration, getter, setter, setterParameter, parameter, typeProjection, functionType, functionTypeParameters, parenthesizedType, infixOperation, asExpression, lambdaParameter, anonymousFunction, superExpression, typeTest, catchBlock)
  : typeModifiers? (simpleType | nullableType | functionType)
  ;
  
### simpleType 
  : (parenthesizedType | typeReference)
  
### typeReference (used by type, nullableType, receiverType)
  : userType
  | 'dynamic'
  ;
  
  
### nullableType (used by type, receiverType)
  : simpleType quest
  ;
  
### quest (used by nullableType)
  : '?'
  | QUEST_WS
  ;
  
### userType (used by delegationSpecifier, constructorInvocation, explicitDelegation, typeReference, parenthesizedUserType, unescapedAnnotation)
  : simpleUserType ('.' simpleUserType)*
  ;
  
## simpleUserType (used by userType)
  : simpleIdentifier typeArguments?
  ;
  
### typeProjection (used by typeArguments)
  : typeProjectionModifiers? type
  | '*'
  ;
  
### typeProjectionModifiers (used by typeProjection)
  : typeProjectionModifier+
  ;
  
### typeProjectionModifier (used by typeProjectionModifiers)
  : varianceModifier
  | annotation
  ;
  
### functionType (used by delegationSpecifier, explicitDelegation, type)
  : (receiverType '.')? functionTypeParameters '->' type
  ;
  

### functionTypeParameters (used by functionType)
  : '(' (parameter | type)? (',' (parameter | type))* ')'
  ;
  
### parenthesizedType (used by type, nullableType, receiverType)
  :  '(' type ')'
  ;
  
### receiverType (used by functionDeclaration, propertyDeclaration, functionType, callableReference)
  : typeModifiers? (parenthesizedType | nullableType | typeReference)
  ;
  
### parenthesizedUserType (used by parenthesizedUserType)
  : '(' userType ')'
  | '(' parenthesizedUserType ')'
  ;
  
## Statements
### statements (used by block, lambdaLiteral)
  : (statement (semis statement)* semis?)?
  ;
  
### statement (used by script, statements, controlStructureBody)
  : (label | annotation)* (declaration | assignment | loopStatement | expression)
  ;
  
See Returns and jumps

### label (used by statement, unaryPrefix, annotatedLambda)
  : IdentifierAt
  ;
  
### controlStructureBody (used by forStatement, whileStatement, doWhileStatement, ifExpression, whenEntry)
  : block
  | statement
  ;
  
### block (used by anonymousInitializer, functionBody, secondaryConstructor, controlStructureBody, tryExpression, catchBlock, finallyBlock)
  : '{' statements '}'
  ;
  
### loopStatement (used by statement)
  : forStatement
  | whileStatement
  | doWhileStatement
  ;
  
### forStatement (used by loopStatement)
  : 'for'
    '(' annotation* (variableDeclaration | multiVariableDeclaration) 'in' expression ')'
    controlStructureBody?
  ;
  
### whileStatement (used by loopStatement)
  : 'while' '(' expression ')' controlStructureBody
  | 'while' '(' expression ')' ';'
  ;
  
### doWhileStatement (used by loopStatement)
  : 'do' controlStructureBody? 'while' '(' expression ')'
  ;
  
### assignment (used by statement)
  : directlyAssignableExpression '=' expression
  | assignableExpression assignmentAndOperator expression
  ;
  
### semi (used by script, packageHeader, importHeader, propertyDeclaration, whenEntry)
  : ;
  ;
  
### semis (used by topLevelObject, classMemberDeclarations, statements)
  : ;+
  ;
  
## Expressions
Precedence	Title	Symbols
Highest	Postfix	++, --, ., ?., ?
 	Prefix	-, +, ++, --, !, label
 	Type RHS	:, as, as?
 	Multiplicative	*, /, %
 	Additive	+, -
 	Range	..
 	Infix function	simpleIdentifier
 	Elvis	?:
 	Named checks	in, !in, is, !is
 	Comparison	<, >, <=, >=
 	Equality	==, !==
 	Conjunction	&&
 	Disjunction	||
Lowest	Assignment	=, +=, -=, *=, /=, %=

### expression (used by classParameter, explicitDelegation, functionValueParameter, functionBody, propertyDeclaration, propertyDelegate, statement, forStatement, whileStatement, doWhileStatement, assignment, indexingSuffix, valueArgument, parenthesizedExpression, collectionLiteral, lineStringExpression, multiLineStringExpression, ifExpression, whenSubject, whenCondition, rangeTest, jumpExpression)
  : disjunction
  ;
  
### disjunction (used by expression)
  : conjunction ('||' conjunction)*
  ;
  
### conjunction (used by disjunction)
  : equality ('&&' equality)*
  ;
  
### equality (used by conjunction)
  : comparison (equalityOperator comparison)*
  ;
  
### comparison (used by equality)
  : infixOperation (comparisonOperator infixOperation)?
  ;
  
### infixOperation (used by comparison)
  : elvisExpression ((inOperator elvisExpression) | (isOperator type))*
  ;
  
### elvisExpression (used by infixOperation)
  : infixFunctionCall (elvis infixFunctionCall)*
  ;
  
### elvis (used by elvisExpression)
  : '?' ':'
  ;
  
### infixFunctionCall (used by elvisExpression)
  : rangeExpression (simpleIdentifier rangeExpression)*
  ;
  
### rangeExpression (used by infixFunctionCall)
  : additiveExpression ('..' additiveExpression)*
  ;
  
### additiveExpression (used by rangeExpression)
  : multiplicativeExpression (additiveOperator multiplicativeExpression)*
  ;
  
### multiplicativeExpression (used by additiveExpression)
  : asExpression (multiplicativeOperator asExpression)*
  ;
### asExpression (used by multiplicativeExpression)
  : prefixUnaryExpression (asOperator type)?
  ;
  
### prefixUnaryExpression (used by asExpression, assignableExpression)
  : unaryPrefix* postfixUnaryExpression
  ;
  
### unaryPrefix (used by prefixUnaryExpression)
  : annotation
  | label
  | prefixUnaryOperator
  ;
### postfixUnaryExpression (used by prefixUnaryExpression, directlyAssignableExpression)
  : primaryExpression
  | primaryExpression postfixUnarySuffix+
  ;
  
### postfixUnarySuffix (used by postfixUnaryExpression)
  : postfixUnaryOperator
  | typeArguments
  | callSuffix
  | indexingSuffix
  | navigationSuffix
  ;
  
### directlyAssignableExpression (used by assignment)
  : postfixUnaryExpression assignableSuffix
  | simpleIdentifier
  ;
  
### assignableExpression (used by assignment)
  : prefixUnaryExpression
  ;
  
### assignableSuffix (used by directlyAssignableExpression)
  : typeArguments
  | indexingSuffix
  | navigationSuffix
  ;
  
### indexingSuffix (used by postfixUnarySuffix, assignableSuffix)
  : '[' expression (',' expression)* ']'
  ;
  
### navigationSuffix (used by postfixUnarySuffix, assignableSuffix)
  : memberAccessOperator (simpleIdentifier | parenthesizedExpression | 'class')
  ;
  
### callSuffix (used by postfixUnarySuffix)
  : typeArguments? valueArguments? annotatedLambda
  | typeArguments? valueArguments
  ;
  
### annotatedLambda (used by callSuffix)
  : annotation* label? lambdaLiteral
  ;
  
### typeArguments (used by simpleUserType, postfixUnarySuffix, assignableSuffix, callSuffix)
  : '<' typeProjection (',' typeProjection)* '>'
  ;
  
  
### valueArguments (used by constructorInvocation, constructorDelegationCall, enumEntry, callSuffix)
  : '(' ')'
  | '(' valueArgument (',' valueArgument)* ')'
  ;
  
### valueArgument (used by valueArguments)
  : annotation? (simpleIdentifier '=')? '*'? expression
  ;
  
### primaryExpression (used by postfixUnaryExpression)
  : parenthesizedExpression
  | simpleIdentifier
  | literalConstant
  | stringLiteral
  | callableReference
  | functionLiteral
  | objectLiteral
  | collectionLiteral
  | thisExpression
  | superExpression
  | ifExpression
  | whenExpression
  | tryExpression
  | jumpExpression
  ;
  
### parenthesizedExpression (used by navigationSuffix, primaryExpression)
  : '(' expression ')'
  ;
  
### collectionLiteral (used by primaryExpression)
  : '[' expression (',' expression)* ']'
  | '[' ']'
  ;
  
### literalConstant (used by primaryExpression)
  : BooleanLiteral
  | IntegerLiteral
  | HexLiteral
  | BinLiteral
  | CharacterLiteral
  | RealLiteral
  | 'null'
  | LongLiteral
  | UnsignedLiteral
  ;

### RegexLiteral
  : ForwardSlash RegexRules ForwardSlash
  ;
  
### stringLiteral (used by primaryExpression)
  : lineStringLiteral
  | multiLineStringLiteral
  ;
  
### lineStringLiteral (used by stringLiteral)
  : '"' (lineStringContent | lineStringExpression)* '"'
  ;
  
### multiLineStringLiteral (used by stringLiteral)
  : '"""' (multiLineStringContent | multiLineStringExpression | '"')*
    TRIPLE_QUOTE_CLOSE
  ;
  
### lineStringContent (used by lineStringLiteral)
  : LineStrText
  | LineStrEscapedChar
  | LineStrRef
  ;
  
### lineStringExpression (used by lineStringLiteral)
  : '${' expression '}'
  ;
  
### multiLineStringContent (used by multiLineStringLiteral)
  : MultiLineStrText
  | '"'
  | MultiLineStrRef
  ;
  
### multiLineStringExpression (used by multiLineStringLiteral)
  : '${' expression '}'
  ;
  
### lambdaLiteral (used by annotatedLambda, functionLiteral)
  : '{' statements '}'
  | '{' lambdaParameters? '->' statements '}'
  ;
  
### lambdaParameters (used by lambdaLiteral)
  : lambdaParameter (',' lambdaParameter)*
  ;
  
### lambdaParameter (used by lambdaParameters)
  : variableDeclaration
  | multiVariableDeclaration (':' type)?
  ;
  
### anonymousFunction (used by functionLiteral)
  : 'fun' (type '.')? functionValueParameters
    (':' type)? typeConstraints?
    functionBody?
  ;
  
### functionLiteral (used by primaryExpression)
  : lambdaLiteral
  | anonymousFunction
  ;
  
### objectLiteral (used by primaryExpression)
  : 'object' ':' delegationSpecifiers classBody
  | 'object' classBody
  ;
  
### thisExpression (used by primaryExpression)
  : 'this'
  | THIS_AT
  ;
  
### superExpression (used by primaryExpression)
  : 'super' ('<' type '>')? ('@' simpleIdentifier)?
  | SUPER_AT
  ;
  
### ifExpression (used by primaryExpression)
  : 'if' '(' expression ')'
    controlStructureBody? (';'? 'else' controlStructureBody?)?
  ;
  
### whenSubject (used by whenExpression)
  : '(' (annotation* 'val' variableDeclaration '=')? expression ')'
  ;
  
### whenExpression (used by primaryExpression)
  : 'when' whenSubject? '{' whenEntry* '}'
  ;
  
### whenEntry (used by whenExpression)
  : whenCondition (',' whenCondition)* '->' controlStructureBody semi?
  | 'else' '->' controlStructureBody semi?
  ;
  
### whenCondition (used by whenEntry)
  : expression
  | rangeTest
  | typeTest
  ;
  
### rangeTest (used by whenCondition)
  : inOperator expression
  ;
  
### typeTest (used by whenCondition)
  : isOperator type
  ;
  
### tryExpression (used by primaryExpression)
  : 'try' block ((catchBlock+ finallyBlock?) | finallyBlock)
  ;
  
### catchBlock (used by tryExpression)
  : 'catch' '(' annotation* simpleIdentifier ':' type ')' block
  ;
  
### finallyBlock (used by tryExpression)
  : 'finally' block
  ;
  
### jumpExpression (used by primaryExpression)
  : 'throw' expression
  | ('return' | RETURN_AT) expression?
  | 'continue'
  | CONTINUE_AT
  | 'break'
  | BREAK_AT
  ;
  
### callableReference (used by primaryExpression)
  : (receiverType? '::' (simpleIdentifier | 'class'))
  ;
  
### assignmentAndOperator (used by assignment)
  : '+='
  | '-='
  | '*='
  | '/='
  | '%='
  ;
  
### equalityOperator (used by equality)
  : '!='
  | '!=='
  | '=='
  | '==='
  ;
  
### comparisonOperator (used by comparison)
  : '<'
  | '>'
  | '<='
  | '>='
  ;
  
### inOperator (used by infixOperation, rangeTest)
  : 'in'
  | NOT_IN
  ;
  
### isOperator (used by infixOperation, typeTest)
  : 'is'
  | NOT_IS
  ;
  
### additiveOperator (used by additiveExpression)
  : '+'
  | '-'
  ;
  
### multiplicativeOperator (used by multiplicativeExpression)
  : '*'
  | '/'
  | '%'
  ;
  
### asOperator (used by asExpression)
  : 'as'
  | 'as?'
  ;
  
### prefixUnaryOperator (used by unaryPrefix)
  : '++'
  | '--'
  | '-'
  | '+'
  | excl
  ;
  
### postfixUnaryOperator (used by postfixUnarySuffix)
  : '++'
  | '--'
  | '!' excl
  ;
  
### excl (used by prefixUnaryOperator, postfixUnaryOperator)
  : '!'
  | EXCL_WS
  ;
  
### memberAccessOperator (used by navigationSuffix)
  : '.'
  | safeNav
  | '::'
  ;
  
### safeNav (used by memberAccessOperator)
  : '?' '.'
  ;
  
##Modifiers

### modifiers (used by typeAlias, classDeclaration, primaryConstructor, classParameter, companionObject, functionValueParameter, functionDeclaration, propertyDeclaration, getter, setter, objectDeclaration, secondaryConstructor, enumEntry)
  : annotation
  | modifier+
  ;
  
### modifier (used by modifiers)
  : classModifier
  | memberModifier
  | visibilityModifier
  | functionModifier
  | propertyModifier
  | inheritanceModifier
  | parameterModifier
  | platformModifier
  ;
  
### typeModifiers (used by type, receiverType)
  : typeModifier+
  ;
  
### typeModifier (used by typeModifiers)
  : annotation
  | 'suspend'
  ;
  
### classModifier (used by modifier)
  : 'enum'
  | 'sealed'
  | 'annotation'
  | 'data'
  | 'inner'
  ;
  
### memberModifier (used by modifier)
  : 'override'
  | 'lateinit'
  ;
  
### visibilityModifier (used by modifier)
  : 'public'
  | 'private'
  | 'internal'
  | 'protected'
  ;
  
### varianceModifier (used by typeProjectionModifier, typeParameterModifier)
  : 'in'
  | 'out'
  ;
  
### typeParameterModifiers (used by typeParameter)
  : typeParameterModifier+
  ;
  
### typeParameterModifier (used by typeParameterModifiers)
  : reificationModifier
  | varianceModifier
  | annotation
  ;
  
### functionModifier (used by modifier)
  : 'tailrec'
  | 'operator'
  | 'infix'
  | 'inline'
  | 'external'
  | 'suspend'
  ;
  
### propertyModifier (used by modifier)
  : 'const'
  ;
  
### inheritanceModifier (used by modifier)
  : 'abstract'
  | 'final'
  | 'open'
  ;
  
### parameterModifier (used by setter, modifier)
  : 'vararg'
  | 'noinline'
  | 'crossinline'
  ;
  
### reificationModifier (used by typeParameterModifier)
  : 'reified'
  ;
  
### platformModifier (used by modifier)
  : 'expect'
  | 'actual'
  ;
  
## Annotations

### annotation ___(used by annotatedDelegationSpecifier, typeConstraint, variableDeclaration, setter, typeProjectionModifier, statement, forStatement, unaryPrefix, annotatedLambda, valueArgument, whenSubject, catchBlock, modifiers, typeModifier, typeParameterModifier)___
  : singleAnnotation
  | multiAnnotation
  ;

### singleAnnotation (used by annotation)
  : annotationUseSiteTarget unescapedAnnotation
  | '@' unescapedAnnotation
  ;
  
### multiAnnotation (used by annotation)
  : annotationUseSiteTarget "[" unescapedAnnotation+ "]"
  | '@' '[' unescapedAnnotation+ ']'
  ;
  
### annotationUseSiteTarget (used by singleAnnotation, multiAnnotation)
  : ANNOTATION_USE_SITE_TARGET_FIELD
  | ANNOTATION_USE_SITE_TARGET_PROPERTY
  | ANNOTATION_USE_SITE_TARGET_GET
  | ANNOTATION_USE_SITE_TARGET_SET
  | ANNOTATION_USE_SITE_TARGET_RECEIVER
  | ANNOTATION_USE_SITE_TARGET_PARAM
  | ANNOTATION_USE_SITE_TARGET_SETPARAM
  | ANNOTATION_USE_SITE_TARGET_DELEGATE
  ;
  
### unescapedAnnotation (used by fileAnnotation, singleAnnotation, multiAnnotation)
  : constructorInvocation
  | userType
  ;
  
## Identifiers

### simpleIdentifier ___(used by importAlias, typeAlias, classDeclaration, classParameter, typeParameter, typeConstraint, companionObject, functionDeclaration, variableDeclaration, setterParameter, parameter, objectDeclaration, enumEntry, simpleUserType, infixFunctionCall, directlyAssignableExpression, navigationSuffix, valueArgument, primaryExpression, superExpression, catchBlock, callableReference, identifier)___
  : Identifier
  | 'abstract'
  | 'annotation'
  | 'by'
  | 'catch'
  | 'companion'
  | 'constructor'
  | 'crossinline'
  | 'data'
  | 'dynamic'
  | 'enum'
  | 'external'
  | 'final'
  | 'finally'
  | 'get'
  | 'import'
  | 'infix'
  | 'init'
  | 'inline'
  | 'inner'
  | 'internal'
  | 'lateinit'
  | 'noinline'
  | 'open'
  | 'operator'
  | 'out'
  | 'override'
  | 'private'
  | 'protected'
  | 'public'
  | 'reified'
  | 'sealed'
  | 'tailrec'
  | 'set'
  | 'vararg'
  | 'where'
  | 'expect'
  | 'actual'
  | 'const'
  | 'suspend'
  ;
  
### identifier (used by packageHeader, importHeader)
  : simpleIdentifier ('.' simpleIdentifier)*
  ;
