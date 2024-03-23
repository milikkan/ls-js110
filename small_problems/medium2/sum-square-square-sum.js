/* 
Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

P:
- i: a number
- o: another number
- r/e:
  - count the integer from 1 until the input (inclusive) and square this sum
  - square all numbers from 1 until the input (inclusive) and sum these squares
  - return the difference of both
- r/i:
  - if input is less than or equal to 1, return 0

D: array to store sums

A:
- high-level:
  - calculate square of sums and calculate sum of squares and return the difference
- step-by- step:
  - if input is less then or equal to 1, return 0
  - declare a variable `numbers` and init to `[]`
  - start a loop from 1 until the input
    - push the next number to the array
    - increment loop counter by 1
  - calculate the sum of `numbers` and square the sum
  - calculate the square of sums of `numbers`
  - return the difference
*/

function sumSquareDifference(num) {
  if (num <= 1) return 0;

  let numbers = Array(num).fill(0);
  numbers = numbers.map((_, idx) => idx + 1);
  
  let squareOfSums = numbers.reduce((sum, num) => sum + num, 0) ** 2;
  let sumOfSquares = numbers.reduce((sum, num) => sum + num ** 2, 0);
  return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150