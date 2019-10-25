// Find in array: sum, min and max, replace min and max - create custom functions

const N = Math.round(1 + Math.random() * 10);
const arr = new Array(N)
    .fill()
    .map(_ => Math.round(Math.random() * 100));
console.log(arr);

const arraySum = function sumArray(array) {
    return array.reduce((a, b) => a + b, 0);
};

const arrayMin = function minArrayEl(array) {
    let directArray = array
        .slice()
        .sort((a, b) => a - b);
    return directArray[0];
};

const arrayMax = function maxArrayEl(array) {
    let reverseArray = array
        .slice()
        .sort((a, b) => b - a);
    return reverseArray[0];
};

const arrayReplMaxMin = function replaceMaxMin(array) {
    let indexMax = array.indexOf(arrayMax(array));
    let indexMin = array.indexOf(arrayMin(array));
    let newArray = array.slice();
    newArray[indexMax] = newArray.splice(indexMin, 1, newArray[indexMax])[0];
    return newArray;
};

let amount = arraySum(arr);
console.log(amount);

let minimum = arrayMin(arr);
console.log(minimum);

let maximum = arrayMax(arr);
console.log(maximum);

let arr2 = arrayReplMaxMin(arr)
console.log(arr2);


