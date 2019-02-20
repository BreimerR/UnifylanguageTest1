import commander from "commander"
import fs from "fs"
import Unify from "./compiler/Unify"

commander.option('--wD, --workingDir <workingDir>', "Working directory")
    .option('-s, --source <source>', 'Source directory')
    .option('-d, --dest <dest>', 'Destination directory')
    .option('--fD, --fileDir <fileDir>', 'File directory relative to the root dir')
    .option('-l, --language <lang>', 'Used language')
    .option('-f, --file <fileName>', 'Source File')
    .option('--ext, --extension <extension>', 'Source File')
    .option('--oL, --outputLanguage <oLang>', 'Output language from input language [php/js ...]')
    .option("--lV, --languageVersion <langV>", "used language version.")
    .option("--oLV, --oLanguageVersion <langV>", "output language version.")
    .parse(process.argv);


export const {workingDir, dest, language, outputLanguage, file, extension, fileDir} = commander;

if (workingDir === undefined) {
    throw new Error("workingDir(Working Directory option must be defined)")
} else if (!fs.existsSync(workingDir)) {
    throw new Error(`Defined directory has to be existing can not found ${workingDir}`)
}

if (workingDir === undefined) {
    throw new Error("workingDir(Working Directory option must be defined)")
} else if (!fs.existsSync(workingDir)) {
    throw new Error(`Defined directory has to be existing can not found ${workingDir}`)
}

let fullFilePath = `${workingDir}/${fileDir}/${file}.${extension}`;

let code = fs.readFileSync(fullFilePath);

let lang = new Unify(code, `${file}.${extension}`, `${workingDir}/${fileDir}`);




// destination file

