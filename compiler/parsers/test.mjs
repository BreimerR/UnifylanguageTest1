class Me {
    constructor(props) {
        this.items = [1, 2, 3];
        this.i = -1;
    }

    [Symbol.iterator]() {
        return this
    }

    next() {
        return {
            value: this.current = this.items[++this.i],
            done: !(this.i < this.items.length)
        }
    }
}
let ME =new Me();
for (let me in ME) {
    console.log(ME.current)
}