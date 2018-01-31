'use strict';
function createBase(value) {
    return function (x) {
        return x += value;
    }
}
let addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27