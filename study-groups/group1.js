// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
// If the array is made up of only negative numbers, return 0 instead.
// An empty array is considered to have zero greatest sum.
// Note that the empty array is also a valid argument array.

/*

input: array of numbers
output: number 

I need to find all possible sums of elements up to the length of the array

algorithm: 

set `result` array to []
iterate over input array (declare firstIndex)
  start another iteration from (firstIndex + 1) until (array.length + 1) (declare secondIndex)
    extract the subarray between firstIndex and secondIndex
    push the subarray to the result
declare a variable called max and intitialize it to 0
iterate over `result` 
  find sum of elements for each subarray,
  if sum is greater than max, assign sum to max 
return max

    */

// Test Cases

function sum(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

function maxSequence(arr) {
  let result = [];

  for (let firstIndex = 0; firstIndex < arr.length; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < arr.length + 1; secondIndex++) {
      let subArray = arr.slice(firstIndex, secondIndex);
      result.push(subArray);
    }
  }
  let max = 0;
  for (let index = 0; index < result.length; index++) {
    if (sum(result[index]) > max) {
      max = sum(result[index]);
    }
  }
  return max;
}


console.log(maxSequence([]) === 0); // true 
console.log(maxSequence([1, 2, 3]) === 6); // true
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

