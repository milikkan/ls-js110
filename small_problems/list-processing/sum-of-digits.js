/* 
Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

- algorithm:
  - convert number to String type
  - split each digit into an array
  - iterate through the array and sum each digit
*/

function sum(num) {
  return String(num).split('').reduce((sum, n) => sum + Number(n), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45