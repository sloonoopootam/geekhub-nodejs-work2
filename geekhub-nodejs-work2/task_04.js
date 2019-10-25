// Create function with 2 string params. It must check if letters in the first correspond to the number of matches in second and return %.

const string1 = "particle accelerator";
const string2 = "arithmetical operators";

const LENGTH = string1.length;
const counter = [];

const strArray1 = Array.from(string1);
const strArray2 = Array.from(string2);


function toCompare(array1, array2) {
    return array1
        .sort()
        .map((v, i) => {
            if (v === array2.sort()[i]) return counter.push(1);
        });
}

const compareResult = toCompare(strArray1, strArray2);

const sumCounter = counter.reduce((a, i) => a + i);

console.log(`There are ${Math.round(sumCounter / LENGTH * 100)}% matches`)
