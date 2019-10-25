// Create a function that will replace all number dividing three with ‘foo’, dividing seven with ‘bar’ and dividing three
// and seven with ‘foobar’. Function with n params.

const N = Math.round(1 + Math.random() * 15);
const numArray = [];

let pushArray = (function arrPusher() {
    do {
        let item = numArray.push(Math.round(1 + Math.random() * 10));
    } while (numArray.length < N);
}());

console.log(numArray);

const foobarArray = function foobar(array) {
    return array
        .map(a => {
            if (!(a % 3) && !(a % 7)) return "foobar";
            if (!(a % 3)) return "foo";
            if (!(a % 7)) return "bar";
            return a;
        });
};

let res = foobarArray(numArray);
console.log(res);
