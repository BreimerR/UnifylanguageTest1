import fs from 'fs';
import Unify from "./Unify";


fs.readFile('../unify/lang.json', 'utf-8', function (a, definitions) {
    definitions = JSON.parse(definitions);

    // let lang = new Language(definitions);

    fs.readFile('./Unify.u', 'utf-8', (a, code) => {
        switch (definitions.name) {
            case 'Unify':
                new Unify(definitions, code);
        }
    });
});

function init(lang, file) {

}


init('Unify','./');
