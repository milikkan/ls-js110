/* 
Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

1.
- i: two numbers
- o: an array of numbers
- r/e:
  - create a sequence of numbers, starting from the `count` argument and return the sequence as an array.
  - each number should be the multiple of starting number (secong argument)
  - count will always be positive or 0.
  - if count is zero, return empty array
- r/i:
  - if starting number is 0, array will be composed of count number of 0s
  - starting number can also be negative

2.
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

3. array

4.
- high-level:
  - start a loop from 1 to count. Create a new array and push the next multiple of starting number on each iteration.
    (1 * start, 2 * start, 3 * start ....)
- step-by-step:
  - define a function `sequence` taking 2 arguments (`count` and `start`)
  - if `count` is `0`, return `[]` (guard clause)
  - declare a variable `factor` and init to `1`
  - declare a variable `result` and init to `[]`
  - start a loop from `factor` to `count`
    - push `factor * start` into `result`
    - increment `factor`
  - return `result`

*/

// function sequence(count, start) {
//   if (count === 0) return [];
//   let factor = 1;
//   let result = [];
//   while (factor <= count) {
//     result.push(factor * start);
//     factor++;
//   }
//   return result;
// }

// using forEach
function sequence(count, start) {
  if (count === 0) return [];
  let result = Array(count).fill(0);
  result.forEach((_, idx) => result[idx] = (idx + 1) * start);
  return result;
}



console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []