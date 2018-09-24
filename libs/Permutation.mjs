import {log} from "../language/helpers";

export default class Permutation {
    static swap(array, index, otherIndex) {
        let current = array[index];

        array[index] = array[otherIndex];
        array[otherIndex] = current;

        return array;
    }

    static get(array, n) {
        n = n || array.length;

        let result = [];

        if (n === 1)
            result = [array.slice()];
        else {
            const nextN = n - 1;

            for (let i = 0; i < nextN; i++) {
                result.push(...this.get(array, nextN));
                array = this.swap(array, Number(!(n % 2)) && i, nextN)
            }

            result.push(...this.get(array, nextN))
        }

        return result
    }


}
