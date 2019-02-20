const code = "const a";

let code_ir = [
    {
        TYPE: "Variable",
        PROPS: {
            name: "a",
            value: undefined,
            type: undefined,
            mutable: false
        },
        ACTION: "declaration",
    }
];

const code1 = `a = 12`;

const code1_ir = [
    {
        TYPE: "Variable",
        PROPS: {
            name: "a",
            /**
             * This is all done at compile time.
             * check in the function ir
             * if the function is defined
             * then check the return values of the function
             * either multiple typed (A|B...),
             * single(A) typed or no type
             * */
            type: "Integer",
            value: 12,
            mutable: false
        },
        ACTION: "assignment"
    }
];

const code2 = `const b = 12`;

const code2_ir = [
    {
        TYPE: "Variable",
        PROPS: {
            name: 'b',
            type: "Integer",
            value: 12,
            mutable: false,
        },
        ACTION: "declaration"
    }
];

const code3 = `
getName(){
    return "Breimer"
}

// this means that the code here will run once
//and the variable gotten from the
// request will never change 
// throughout the lifetime of the application
const name = getName(); 
`;

const code3_ir = [
    {
        TYPE: "FUNCTION",
        PROPS: {
            name: "getName",
            type: "normal",
            arguments: [
                {
                    TYPE: "Variable",
                    PROPS: {
                        name: "a",
                        type: "String",
                        /*argument value is
                        * always going to be undefined
                        * until we assign a value to it.
                        * */
                        value: undefined
                    },
                    /* Assignment is done at run time or
                    * compile time depending on the type
                    * of the function that we
                    * are declaring.
                    * */
                    ACTION: "declaration"
                }
            ],
        },
        ACTION: "declaration"
    },
    {
        TYPE: "VARIABLE",
        PROPS: {
            name: "name",
            type: "String",
            value: "runtime",
            mutable: false
        },
        ACTION: "declaration-assignment"
    },
];


const class1 = `
class A{


}


class B : A{

}

class C : B {


}`;

const class1_ir = [
    {
        TYPE: "CLASS",
        PROPS: {},
        ACTION: "declaration"
    }
];


const matrix = `
class Matrix{
    dot(a,b){
        
    }
    
    operationCompatibilityCheck(){}
    
    multiply(Array inputs...){
        $example =  [
            1 2, 2 3
        ]
        
        $example1 = [
          1 2, 2 3
        ]
    }
    
}`;


const array = `
class Array: DataType {
    infix Int index in => length > index >= 0
}`;


const operations = `
$a =  12

$b = 12

$c =  a + b
`;

const operations_ir = [
    {
        TYPE: "Variable",
        PROPS: {
            name: "a",
            type: "Integer",
            value: 12
        },
        ACTION: "declaration"
    },
    {
        TYPE: "Variable",
        PROPS: {
            name: "b",
            type: "Integer",
            value: 12
        },
        ACTION: "declaration"
    }
];