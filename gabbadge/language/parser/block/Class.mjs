import Block from 'Block'

export default class Class extends Block {
    constructor(name) {
        super(null);
        this.name = name
    }

    convert() {

    }

    get name() {
        return this.nm;
    }


    // this is because we do not have private properties in javascript
    set name(name) {
        return this.nm = name;
    }

}