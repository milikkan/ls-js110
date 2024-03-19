/* 
Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

P:
- i: an array of numbers
- o: a number
- r/e:
  - find leading subsequence (leading subsequence is the list of subsequences that all start with the first number)
  - sum each subsequence and return the sum of these sums
  - input array contains at least one number

D: array

A:
- high-level:
  - find all leading subsequences, iterate through the subsequences and find their sums, return the sum of sums.
*/

// function sumOfSums(arr) {
//   if (arr.length === 1) return arr[0];
//   let subsequences = [];
//   for (let idx = 1; idx <= arr.length; idx++) {
//     subsequences.push(arr.slice(0, idx));
//   }
//   let subseqSums = subsequences.reduce((sums, subseq) => {
//     sums.push(subseq.reduce((sum, num) => sum + num, 0));
//     return sums;
//   }, []);
//   return subseqSums.reduce((sum, num) => sum + num, 0);
// }

// another method
function sumOfSums(arr) {
  if (arr.length === 1) return arr[0];
  let sum = 0;
  let prevSum = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    let num = arr[idx];
    prevSum += num;
    sum += prevSum;
  }
  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35