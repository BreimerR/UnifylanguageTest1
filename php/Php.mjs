import Language from "../language/Language";

export default class Php extends Language {
    convert(){
        this.parseTree = [
            {
                IMPORTS:[

                ],
            },
            {
                CLASS:{
                    SUPERS:[],
                    IMPLEMENTS:[],
                    TRAITS:[],
                    PUBLIC:[],
                    PRIVATE:[],
                    PROTECTED:[]
                }
            },
            {
                FUNCTION:{
                    SUPERS:[],
                    IMPLEMENTS:[],
                }
            }
        ];
    }
}

let  parser =  new Php();

parser.convert();