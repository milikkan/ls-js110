/* 
** Problem: Multiples of 3 and 5 **

Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

** 1. Understanding the Problem **
- Input : an integer greater than 1
- Output: an integer (the sum)
- Rules :
  - Explicit requirements:
    - compute sum of multiples of 3 or 5
    - the range is between 1 and input, inclusive
  - Implicit requirements:
    - if a number is both multiple of 3 and 5, use it once, not twice

** 2. Examples / Test Cases **

multisum(3);    // 3
multisum(5);    // 5
multisum(10);   // 33
multisum(1000); // 234168

** 3. Data Structure **
- mental model from input to output
  - mental model #1
    - 10 -> (1 -> 2 -> **3** -> 4 -> **5** -> **6** -> 7 -> 8 -> **9** -> **10**) -> 33
    - iterate through the numbers from 1 to input and count multiples of 3 or 5 towards the sum
    - don't need an array or object, need just a variable to hold the sum
  - mental model #2
    - 10 -> [1, 2, 3, 5, 6, 7, 8, 9, 10] -> [3, 5, 6, 9, 10] -> 33
    - Iterate through the numbers from 1 to input and place them in an array, then keep only the multiples of 3 and 5. Then find the sum.
    - need an array as data structure
  
** 4. Algorithm **
#1
- declare `sum` and initialize it to `0`
- iterate through the numbers betweeen 1 and the input, inclusive
  - if the current number whwn divided by 3 or 5 has a 0 remainder, then count it towards the `sum`
- return `sum`

#2
- Declare `multiples` and set it to `[]`
- iterate through the number from 1 to input, inclusive, and add them to `multiples`
- iterate through `multiples` and kee only the values with numbers that when divided by 3 or 5, have a remainder of 0
- return sum of `multiples` 
*/

function multisum(num) {
  let sum = 0;

  for (let count = 1; count <= num; count++) {
    if (count % 3 === 0 || count % 5 === 0) {
      sum += count;
    }
  }

  return sum;
}

console.log(multisum(3));    // 3
console.log(multisum(5));    // 5
console.log(multisum(10));   // 33
console.log(multisum(1000)); // 234168