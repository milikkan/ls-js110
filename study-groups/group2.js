// Given a list of integers and a single sum value, return the first two values
// in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

//Example:

// console.log(sumPairs([4, 3, 2, 3, 4],         6));
//                    ^-----^         4 + 2 = 6, indices: 0, 2
//                       ^-----^      3 + 3 = 6, indices: 1, 3
//                          ^-----^   2 + 4 = 6, indices: 2, 4
// == [4, 2]

// Negative numbers and duplicate numbers can and will appear.

/*

Bethany's algorithm:

Input: 1) array 2) number 
Output: array of 2 elems that add up to the number

Initialize an empty array to store the values: numbersToAdd
- Iterate through the list of integers
- Add element at idx 0 with element at idx 1
  - add element at idx 0 with elem at idx 2
    - and so until we've reached the end of the original array
  - if the sum of the element we are iterating over with and the othernumber is equal to number, push both of these elements to our array numbersToAdd
    - break out of the loop 


-outer loop that's iterating over the current element
  - an inner that's iterating over the next element that we're adding
*/

/* 
Vivan's algorithm:

- Initialize an empty array to store the values
- Iterate through the list of integers
- For each integer, 
  - Calculate the difference between the target sum and the num
  - Check if the difference is in the arrays set
    - If it is, return the pair(diff, num)
    - If it is not, add num to the array set
  - If no pair is found in the iteration, return 

*/

function sumPairs(arr, sum) {
  let result = [];
  let pair;
  for (let index = 0; index < arr.length; index++) {
    let num = arr[index];
    let diff = sum - num;
    if (result.includes(diff)) {
      return [diff, num];
    } else {
      result.push(num);
    }
  }
}

//Test cases

/* 

- define `sumPairs` function that takes `arr` and `sum` as parameters
- declare a variable `pairs` and initialize with empty object (keys will represent second number index, value will represent number pair)
- iterate through the array and declare `firstIdx` as loop counter
  - declare variable `firstNum` and assign it the number at `firstIdx`
  - iterate through the array and declare `secondIdx` as loop counter (secondIdx = firstIdx + 1)
    - declare variable `secondNum` and assign it the number at `secondIdx`
    - if (firstNum + secondNum) equals to `sum`
      - set `secondIdx` key of `pairs` object to the value of [firstNum, secondNum] array
- if there is no key, return undefined      
- declare a variable lowestKey and assign the lowest key value to it
- return pair that corresponds to the lowest key    

*/

function sumPairs(arr, sum) {
  let pairs = {};
  
  for (let firstIdx = 0; firstIdx < arr.length; firstIdx++) {
    let firstNum = arr[firstIdx];
    for (let secondIdx = firstIdx + 1; secondIdx < arr.length; secondIdx++) {
      let secondNum = arr[secondIdx];
      if (firstNum + secondNum === sum) {
        pairs[secondIdx] = [firstNum, secondNum];
      }
    }
  }
  let keys = Object.keys(pairs);
  if (keys.length === 0) return;
  let minKey = Math.min(...keys);
  return pairs[minKey];
}

console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]