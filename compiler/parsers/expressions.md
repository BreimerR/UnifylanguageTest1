# Unify Expressions

	/**
	 *
	 * @param operation the operation sign (e.g. PLUS or IS)
	 * @param parser the parser object
	 * @return node type of the result
	 */
	parseRightHandSide

## Expressions
            
### parseExpression
```
annotations element
  "(" element ")" // see tupleLiteral
  literalConstant
  functionLiteral
  tupleLiteral
  "null"
  "this" ("<" type ">")?
  expressionWithPrecedences
  if
  try
  "typeof" "(" element ")"
  "new" constructorInvocation
  objectLiteral
  declaration
  jump
  loop
```
###  parseBinaryExpression
```
element (operation element)*
```


### parseLabeledExpression
```
label prefixExpression
```
###  parsePrefixExpression

```
operation? prefixExpression
```

### parseDoubleColonSuffix
```
doubleColonSuffix
	"::" SimpleName typeArguments?

```

### parsePostfixExpression

```
postfixUnaryExpression
	atomicExpression postfixUnaryOperation*
	
postfixUnaryOperation
	"++" : "--" : "!!"
   typeArguments? valueArguments (getEntryPoint? functionLiteral)
   typeArguments (getEntryPoint? functionLiteral)
   arrayAccess
   memberAccessOperation postfixUnaryExpression // TODO: Review
   
```

### parseCallSuffix

```
callSuffix
  typeArguments? valueArguments annotatedLambda
  typeArguments annotatedLambda  
```

### parseSelectorCallExpression
```
 atomicExpression typeParameters? valueParameters? functionLiteral*
```
  	 
### parseOperationReference

```

```


### parseCallWithClosure
```
annotatedLambda*
```
### parseAnnotatedLambda
```
annotatedLambda
     : ("@" annotationEntry)* labelDefinition? functionLiteral
```
    
### parseAtomicExpression

#### atomicExpression

```
   "this" label?
   "super" ("<" type ">")? label?
   objectLiteral
   jump
   if
   when
   try
   loop
   literalConstant
   functionLiteral
   declaration
   SimpleName
   collectionLiteral
```

###  parseStringTemplate
```

stringTemplate
   OPEN_QUOTE stringTemplateElement* CLOSING_QUOTE

```
  
### parseStringTemplateElement
```

stringTemplateElement
   RegularStringPart
   ShortTemplateEntrySTART (SimpleName | "this")
   EscapeSequence
   longTemplate
  
longTemplate
  "${" expression "}"

```

### parseLiteralConstant

#### literalConstant
```
   "true" | "false"
   stringTemplate
   NoEscapeString
   IntegerLiteral
   CharacterLiteral
   FloatLiteral
   "null"
```
  
### parseWhen
#### when
```
   "when" ("(" (modifiers "val" SimpleName "=")? element ")")? "{"
       whenEntry*
   "}"
```

#### whenEntry

```
whenEntry
  // TODO : consider empty after ->
  whenCondition{","} "->" element SEMI
  "else" "->" element SEMI
```

#### parseWhenEntryNotElse
```
whenCondition{","} "->" element SEMI
```  

#### WhenCondition
```
   expression
   ("in" | "!in") expression
   ("is" | "!is") isRHS
```

### ArrayAccess
```
"[" element{","} "]"     
```

### CollectionLiteralExpression
```
collectionLiteral
	"[" element{","}? "]"

```

### SimpleNameExpression

```
SimpleName
```

### LocalDeclaration
```
modifiers declarationRest
```

### functionLiteral
```
functionLiteral  // one can use "it" as a parameter name
     "{" expressions "}"
     "{" (modifiers SimpleName (":" type)?){","} "->" statements "}"
```
#### FunctionLiteral

```
If it has no ->, it's a block, otherwise a function literal
```

#### FunctionLiteralParameterList
```
lambdaParameter{","}
	 lambdaParameter
	   variableDeclarationEntry
	   multipleVariableDeclarations (":" type)?
```

### Statements
```
expressions
   SEMI* statement{SEMI+} SEMI*
```
### Statements
```
expressions
  SEMI* statement{SEMI+} SEMI*
```

### statement

```
declaration
blockLevelExpression  
```
   
### BlockLevelExpression

```
blockLevelExpression
     annotations + ("\n")+ expression
```

### LocalDeclarationRest
#### declaration
```
function
property
extension
class
typeAlias
object
```

### DoWhile
```
"do" element "while" "(" element ")"
```

### While
```
"while" "(" element ")" element
```

### For

```
"for" "(" annotations ("val" | "var")? (multipleVariableDeclarations | variableDeclarationEntry) "in" expression ")" expression

TODO: empty loop body (at the end of the block)?
```
### LoopBody
```
element
```
### Try

```
try
     *   : "try" block catchBlock* finallyBlock?
     *   ;
     * catchBlock
     *   : "catch" "(" annotations SimpleName ":" userType ")" block
     *   ;
     *
     * finallyBlock
     *   : "finally" block
```

### if
```
 "if" "(" element ")" element SEMI? ("else" element)?
```

### Condition

    /*
     * "(" element ")"
     */
     
### Jump

    /*
     * : "continue" getEntryPoint?
     * : "break" getEntryPoint?
     */

### Return
    /*
     * "return" getEntryPoint? element?
     */
     
### LabelReferenceWithNoWhitespace
```
labelReference?
```

### LabelDefinition
```
IDENTIFIER "@"
```

### LabelReference

```
"@" IDENTIFIER
```
### Throw
```
"throw" element
```

### ParenthesizedExpression
```
"(" expression ")"
```

### ThisExpression
```
"this" label?
```

### SuperExpression
```
"this" ("<" type ">")? label?
```

### ValueArgumentList
```
valueArguments
     *   : "(" (SimpleName "=")? "*"? element{","} ")"
```

### ValueArgument
```
(SimpleName "=")? "*"? element
```

### ObjectLiteral
```
"object" (":" delegationSpecifier{","})? classBody // Cannot make class body optional: foo(object : F, A)
```