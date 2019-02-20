export const isEmpty = function (object) {
    if (typeof object === "string") {
        let string = object.trim();
        return string === "";
    } else if (typeof object === "number") {
        return object === 0;
    } else if (object.constructor.name === "Array") {
        return !(object.length > 0)
    } else if (object.constructor.name === "Object") {
        // if we loop even once yes we have something else we have nothing
        for (a in object) {
            return false
        }

        return true
    }
};

export const forEach = function (iterable, func) {
    if (func === undefined) return false;

    for (let k in iterable) {
        func(iterable[k], k)
    }
};


let a = [];

