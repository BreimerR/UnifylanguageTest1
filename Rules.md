# ___UNIFY___ 

Unify is a language that is supposed to
be readable and understandable from the
get go we want a language that makes
sense and not assumptions from the get go.


# Keywords

1. a{","}
	- Used to mean a(given a could be anything) comes before should continue parse as long an a ","(COMMA_TOKEN) is found after it.
2. a?
	- Used to show that a could or could not be there for a that is a valid statement.

# Grammar

## File start
```
fileAnnotationList? packageDirective? import*
```
## package Name
```
SimpleName{"."}
```
## Import Statements
```
"import" SimpleName{"."} ("." "*" | "as" SimpleName)? SEMI?
```
## Top level parse
```
package
class
extension
function
property
typeAlias
object
```

## Modifier | Annotation

```
(modifier | annotation)*
```

### fileAnnotationList
```
("[" "file:" annotationEntry+ "]")*

```
### Annotations

```
(annotation | annotationList)*
```
#### Annotation
```
"@" (annotationUseSiteTarget ":")? unescapedAnnotation
```

##### Annotation LIst
```
"@" (annotationUseSiteTarget ":")? "[" unescapedAnnotation+ "]"
```

#####  annotationUseSiteTarget
```
"file"
"field"
"property"
"get"
"set"
"param"
"setparam"
```

## Class | Enum

```
modifiers ("class" | "interface" | "enum") SimpleName
   typeParameters?
   primaryConstructor?
   (":" annotations delegationSpecifier{","})?
   typeConstraints
   (classBody? | enumClassBody)
```


### primaryConstructor
```
(modifiers "constructor")? ("(" functionParameter{","} ")")
```
### object

```
"object" SimpleName? primaryConstructor? ":" delegationSpecifier{","}? 	classBody?
 ```
 
###  enumClassBody
 ```
 "{" enumEntries (";" members)? "}"
 ```
 
####  enumEntries
```
enumEntry{","}?
```

####  enumEntry
```
modifiers SimpleName ("(" arguments ")")? classBody?
```

### classBody
```("{" members "}")?
```
###  members
```
memberDeclaration*
```


####  memberDeclaration
    modifiers memberDeclaration'
    
#### memberDeclaration'
```
companionObject
secondaryConstructor
function
property
class
extension
typeAlias
anonymousInitializer
object
```


#### secondaryConstructor
```
modifiers "constructor" valueParameters (":" constructorDelegationCall)? block
```

#### constructorDelegationCall
```
"this" valueArguments
"super" valueArguments
```

#### typeAlias
```
modifiers "typealias" SimpleName typeParameters? "=" type
```


### variableDeclarationEntry
```
(type)? SimpleName 
```

### variableDeclaration

```
variableDeclarationEntry(("by" | "=") expression)?{","}?SEMI?
```
 
### property
 ```
modifiers 
	typeParameters?
	// (type ".")?
	variableDeclaration
	// typeConstraints
	<getter? setter?>?
 ```
 
 #### Example
 
 ```
public static <T> Int a = 12 ,String b = "", Int func (a) => c;
 ```
 
####  propertyDelegate
```
"by" expression
```
 

#####

```
(SimpleName (":" type){","})
```

####  getterOrSetter
```
modifiers ("get" | "set")

   (     "get" "(" ")"
      |
         "set" "(" modifiers parameter ")"
   ) functionBody
````

#### function
```
 modifiers "fun" typeParameters?
       (type ".")?
       SimpleName
       typeParameters? functionParameters (":" type)?
       typeConstraints
       functionBody?
```

##### type

```
(type "." | annotations)?     
```
     
##### functionBody

```
  block
  "=" element
```

##### block

```
"{" (expressions)* "}"
```
##### deligationSpecifier

```
delegationSpecifier{","}
```

##### deligationSpecifier

```
constructorInvocation // type and constructor arguments
userType
explicitDelegation
```

######  explicitDelegation
```
userType "by" element
```

#### typeParameters

```
("<" typeParameter{","} ">")
```

#### typeConstraints

```
("where" typeConstraintsList)?
```

##### typeConstraintsList
```
typeConstraint{","}
```

#### typeConstraint

```
annotations SimpleName ":" type
```


#### typeParameter
``` 
modifiers (userType)? SimpleName 

```
#### type

```
typeModifiers typeReference
```
##### typeReference
 ```
 functionType
 userType
 nullableType
 "dynamic"
```
##### nullableType
 ```
 typeReference "?"
```

#### userType
```
simpleUserType{"."}
```

#### optionalProjection
```
(optionalProjection type){","}
```

#### functionType

```
(type ".")? "(" parameter{","}? ")" "->" type?
```

##### functionParameters

```
"(" functionParameter{","}? ")"

```
##### functionParameter
 ``` 
 modifiers functionParameterRest
```

##### functionParameterRest
```
parameter ("=" element)?
```


# Statements

## Variable declaration

### Examples

#### ___Declaration with declaration identifier___

```
$a
$b
$c

```
#### ___Declaration with initialization___

```
$a = 12
$b = 20
Number a = 1
Number b = 1e2
```


##### ___Multi declarations___
```
 /**
 * (SimpleName (":" type){","})
 */
```
#### ___Declaration with type definition___
```
TypeOrClass variablename
```

#### ___Declaration with default value___
- This will take into effect if the we try to set it with an undefined value
````
$controllerName: "Home"
String controllerName : "Home"
$controller: new controllerName();
TypeDefenition breimer: new TypeDefenition("breimer") = new TypeDefenition("brimer")
````

#### ___Declaration with derived value from a call___

```
App app = new App()
String name =  app.name
Int age = Person.age
```

#### ___Declaration with variable deconstruction___

```
$p = new Person()
${name} =  p
Int {age} = p
```

## Function Declarations

#### Example ___ (namedWith args) ___ 
```
functionName(/*arguments*/){

}
```

#### Example  ___(namedWith with no args)___

```
functionName {

}
```

## 

### Named functions

### Anonymous functions

## Class Declaration
```
/*@annotation objectKeyword className extensions*/

class Apple{

}

singleton Apple{

}

data class App;
```

#### ___propertyDelegate___
```
/*
 *   : "by" expression
 *   ;
 */
```
## Enum Declaration
```
enum Places{

}
```


### Example
- It makes sense to end declarations and start a body rather than leaving it to a new line to decide what comes next
```
$a  = 12;
Int b = 12;

/* $ starts a declaration variable creation.
thus it is reasonable for it to be able 
to create more variables like below
*/

$b = 12, c = 30;
```

### Example 2
- Try to always stick to your rules. 
- In normal circumstances a user data inputs are always mutable 
- from arrays to strings and such thus should be treated a and created as so
- Programmers data is not mutable in almost all times as it is usually fixed
thus we can mutability should not be possible or reduced to the best of the languages capabilities 
 
## Why mutability is bad

```c
// Language C
int a[] = {1,2,3}
/*
	This creates an array with 3 items 
	thus the memory location if fixed to 3 items 
	each of 4bits 
	
*/

int * b = a;
/*
	This creates an 8 bit memory address for start point
	then allocation this means that it will always allocate 8
	bits for even the smallesf off arrays ever 
	this being a bit data servie 
*/ 
```

