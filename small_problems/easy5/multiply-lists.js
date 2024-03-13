/* 
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

1.
- i: 2 array of numbers
- o: a new array of numbers
- r/e:
  - multiply each number from arrays at the same index and return result as a new array
  - each array will contain same number of elements
- r/i:
  - What happens if the arrays are empty? I will return `[]` in this case.

2.
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

3. array

4.
- define a function with 2 parameters, `arr1` and `arr2`
- declare a `result` variable and init to `[]`
- if `arr1`.length is `0`, return `result` (guard clause)
- iterate through `arr1`
  - take the number at current index and take the number at current index from `arr2` and multiply them
  - push the product to `result`
- return `result`  

*/

// function multiplyList(arr1, arr2) {
//   let result = [];
//   if (arr1.length === 0) return result;
//   arr1.forEach((num, idx) => result.push(num * arr2[idx]));
//   return result;
// }

// using map
function multiplyList(arr1, arr2) {
  if (arr1.length === 0) return [];
  return arr1.map((num, idx) => num * arr2[idx]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
console.log(multiplyList([], []));                    // []