import Ast from "./Ast"
import MethodAst from "./MethodAst";
import TypedArray from "./typedArrays/TypedArray";
import VariableAst from "./VariableAst";

export default class ClassAst extends Ast {
    constructor(name) {
        super();
        

        this.name = name;
        this.properties = {
            private: {
                methods: new TypedArray(MethodAst),
                variables: new TypedArray(VariableAst)
            },
            protected: {
                methods: new TypedArray(MethodAst),
                variables: new TypedArray(VariableAst)
            },
            public: {
                methods: new TypedArray(MethodAst),
                variables: new TypedArray(VariableAst)
            },
            native: {
                methods: new TypedArray(MethodAst),
                variables: new TypedArray(VariableAst)
            }
        };
    }
}


