export default class Sections {

    constructor() {
        this.openSections = [];
    }

    static get regex() {
        throw new Error(`Class has to implement get regex method ${this.prototype.name}`)
    }

    get openSectionsExist() {
        return !!this.openSections.length
    }

    static test(string) {
        for (let section of this.sections) {
            // if
            if (section.test(string)) {
                return true;
            }
        }

        return false;
    }

    static shouldParse(string) {
        return this.test(string)
    }

     get sections() {
        throw new Error(`Class has to implement get sections method ${this.prototype.name}`)
    }


}