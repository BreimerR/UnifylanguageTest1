export default class Value {
    constructor(type, value) {
        this.typ = type;
        this.val = value;
    }

    get type() {
        return this.typ;
    }

    set type(type) {
        // this can be used in times of typecasting;
        this.typ = type
    }

    get value() {
        return this.val;
    }

    set value(value) {
        this.val = value
    }
}