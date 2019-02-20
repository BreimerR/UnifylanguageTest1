// run this file to create all tokens
import fs from "fs"

let tokens = [
    {SqLine: /~/},
    {TExclamation: /`/},
    {Exclamation: /!/},
    {At: /@/},
    {Hash: /#/},
    {Dollar: /\$/},
    {Percent: /%/},
    {UCaret: /\^/},
    {And: /&/},
    {Asterisk: /\*/},
    {LBracket: /\(/},
    {RBracket: /\)/},
    {Underscore: /_/},
    {Minus: /-/},
    {Plus: /\+/},
    {Equals: /=/},
    {LSBracket: /\[/},
    {RSBracket: /]/},
    {LSqBracket: /{/},
    {RSqBracket: /}/},
    {Pipe: /\|/},
    {BackSlash: /\\/},
    {Colon: /:/},
    {SColon: /;/},
    {DExclamation: /"/},
    {SingleExclamation: /'/},
    {LessThan: /</},
    {Coma: /,/},
    {GreaterThan: />/},
    {Dot: /\./},
    {ForwardSlash: /\//},
    {Question: /\?/},
    {NewLine: /\n/},
    {Space: /\s/},
    {Tab: /\t/}
];

// initialize all tokens from the tokens objects.
tokens.forEach((token, i) => {
    let [name] = Object.keys(token), rgx = token[name];

    fs.writeFileSync(
        `/opt/lampp/htdocs/UnifylanguageTest1/compiler/tokens/characters/${name}.mjs`,
        createClass(name, rgx)
    );
});


function createClass(name, rgx) {
    return `import Token from "../Token"

export default class ${name} extends Token {
  
}
${name}.rgx =  /^${rgx.source}$/;
`
}