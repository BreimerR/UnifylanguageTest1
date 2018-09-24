import {log} from "../language/helpers";

Array.prototype.swap = function (index, otherIndex) {
    let valueAtIndex = this[index];

    this[index] = this[otherIndex];
    this[otherIndex] = valueAtIndex
};

function permutation(array, n) {
    array = array || this;
    n = n || array.length;

    let result = [];

    if (n === 1)
        result = [array.slice()];
    else {
        const nextN = n - 1;

        for (let i = 0; i < nextN; i++) {
            result.push(...permutation(array, nextN));
            array.swap(Number(!(n % 2)) && i, nextN)
        }

        result.push(...permutation(array, nextN))
    }

    return result
}

Array.prototype.permutation  = function (n){
    return permutation(this)
};


