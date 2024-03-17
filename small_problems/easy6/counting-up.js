/* 
Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

1.
- i: a positive number
- o: an array of numbers
- r/e:
  - construct an array that has numbers from 1 to input
  - include input number
  - numbers will be in ascending order

2.
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

3. array

4.
- high-level:
  - create a new array, iterate from 1 to input, push current number to array on each iteration.
- step-by-step:
  - define function `sequence` that takes a param (`num`)
  - declare a variable `result` and init to `[]`
  - start iterating from 1 to `num` (loop counter is `count`)
    - push `count` to `result`
  - return `result`
*/

// function sequence(num) {
//   let result = [];
//   let count = 1;
//   while (count <= num) {
//     result.push(count);
//     count++;
//   }
//   return result;
// }

// using map
function sequence(num) {
  let result = Array(num).fill(0);
  return result.map((_, idx) => idx + 1);
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]