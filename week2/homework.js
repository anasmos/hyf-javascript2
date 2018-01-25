'use strict';
// step1
let numbers = [1, 2, 3, 4];

let newNumbers = numbers.filter((number) => {
    return number % 2 !== 0;
}).map((number) => {
    return number * 2;
});
console.log(newNumbers);
//step2
let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);
//step2.1 Collect two days' worth of tasks.

function sumDuration(arr) {
    let sum = 0;
    arr.forEach((item) => {
        sum += item.duration;
    })
    return sum;
};
console.log('---------------------------------------------------');
console.log(sumDuration(tasks));
//step2.2 Convert the task durations to hours, instead of minutes.
function convertToHours(arr) {
    let hours = arr.map((item) => {
        item.duration = item.duration / 60;
        return item;
    });
    return hours;
}
console.log('-----------------------convertToHours-------------------------------');
let hours = convertToHours(tasks);
console.log(hours);

//step2.3 Filter out everything that took two hours or more (remove from the collection)
function removeTwoHours(arr) {
    let newArr = arr.filter((item) => {
        return item.duration < 2;
    });
    return newArr;
}
console.log('----------------removeTwoHours---------------------------------')
console.log(removeTwoHours(hours));
//step2.4 Multiply the each duration by a per-hour rate for billing
//(you can decide yourself what Maartje should make per hour) and sum it all up.
function rateHours(arr) {
    let sum = 0;
    arr.forEach((item) => {
        sum += item.duration * 50;
    })
    return sum;
}

console.log('================rateHours=====================');
//
console.log('Euro '+rateHours(hours).toFixed(2));
