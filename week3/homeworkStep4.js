'use strict';
//step1
function foo(func) {
    func(); 
}

function bar() {
    console.log('Hello, I am bar!');
}
foo(bar);

//setTimeout.
function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 1000);

// function threeFive
function sayThree(x) {
    console.log(x + " is divisible by 3");
}
function sayFive(x) {
    console.log(x + " is divisible by 5");
}
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    let arr = [];
    for (let i = startIndex; i <= stopIndex; i++){
        arr.push(i);
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            threeCallback(arr[i]);
            fiveCallback(arr[i]);
        }
        else if (arr[i] % 3 === 0) {
            threeCallback(arr[i]);
        }
        else if (arr[i] % 5 === 0) {
            fiveCallback(arr[i]);
        }
    }
}
threeFive(10, 15, sayThree, sayFive);
//Repeat a string repeat a string
//using for loop
function repeatStringNumTimesFor(str, num) {
    if (num <= 0) {
        return "";
   }
    else {
        let result = "";
        for (let i = 0; i < num; i++){
            result += str;
        }
        return result;
}
}

console.log(repeatStringNumTimesFor("abc", 3));
// using whileloop
function repeatStringNumTimesWhile(str, num) {
    if (num <= 0) {
        return "";
    }
    else {
        let result = "";
        let i = 0;
        while ( i < num) {
            result += str;
            i++;
        }
        return result;
    }
}

console.log(repeatStringNumTimesWhile("abc", 3));
// using do loop
function repeatStringNumTimesDo(str, num) {
    if (num <= 0) {
        return "";
    }
    else {
        let result = "";
        let i = 0;
        do {
            i++;
            result += str;
       } while (i < num)
        return result;
    }
}

console.log(repeatStringNumTimesDo("abc", 3));
//step 7
let x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);
console.log("by tring to excute it I found in case of variable the function take a copy of variable and change it but\n not the original, but in case of object the function take the original and modify it\n but the real resune why I do't know");