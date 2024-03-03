// Given the following data structure, sort the array so that the sub-arrays are
// ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function sumOdd(arr) {
  return arr.reduce((acc, num) => {
    return (num % 2 === 1) ? (acc + num) : acc;
  }, 0);
}

let sorted = arr.slice().sort((a, b) => sumOdd(a) - sumOdd(b));

console.log(arr);
console.log(sorted);