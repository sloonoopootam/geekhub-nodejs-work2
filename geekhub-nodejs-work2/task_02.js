// Create function which will return function with callback in arguments

function func1() {
    return Array.from(func1.arguments).map(a => console.log(a));
}

function func2() {
    return Array.from(func2.arguments).map(a => console.log(a.reverse()));
}

const arr = [1, 15, -20, func1, 56, -37, -2, func2];

const cb = arr.filter(a => typeof a === "function");
const args = arr.filter(a => typeof a !== "function");

const cbFunc = function callback(arrayFunc) {
    return arrayFunc.map(a => a(args));
};

let callbacks = cbFunc(cb);