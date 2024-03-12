/* 
Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

1.
- input: an array of nums
- output: an array of nums
- rules:
  - explicit:
    - returned array will contain same number of elements
    - each number in the returned array will be a running total
      - running total: the current value of input array added the previous value of output array
  - implicit:
    - empty array returns []
    - single element array returns the same array
    - first element of input and output must be the same number
    - return a new array

2.
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

3. an array of numbers

4.
- declare a variable `result` and initialize it to `[]`
- declare a variable `runningTotal` and initialize it to `0`
- iterate through the input array
  - add current number to `runningTotal` and reassign `runningTotal` to the result
  - push `runningTotal` to result
- return `result`
*/

function runningTotal(arr) {
  let result = [];
  let runningTotal = 0;

  result = arr.map(currentNum => {
    runningTotal = currentNum + runningTotal;
    return runningTotal;
  });

  return result;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []