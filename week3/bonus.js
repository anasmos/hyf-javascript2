'use strict';
let myArray = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i); 
console.log(unique);