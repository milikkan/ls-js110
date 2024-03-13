/* 
Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

1.
- i: an array
- o: two arrays
- r/e:
  - return 2 arrays: 1. the first half of input array 2. the second half of input array
  - if input array has odd number of items, put the middle item to the first array
- r/i:
  - if input is empty array, return 2 empty arrays

2.
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

3. array

4.
- high-level:
  - declare two arrays, iterate through input array, push elements until the middle index to the first array, push remaining elements to the second array
- step-by-step
  - declare two variables `left` and `right` and init them to `[]`
  - declare `leftSize` and assign it to the result of `Math.ceil(arr.length / 2)`
  - iterate through the array
    - if `left.length` is less than `leftSize`
      - push current element to `left`
    - else
      - push current element to `right`
  - return `[left, right]`    
*/

// function halvsies(arr) {
//   let left = [];
//   let right = [];
//   let leftSize = Math.ceil(arr.length / 2);
  
//   arr.forEach(current => {
//     if (left.length < leftSize) {
//       left.push(current);
//     } else {
//       right.push(current);
//     }
//   });
//   return [left, right];
// }

// another solution: using slice
function halvsies(arr) {
  let leftSize = Math.ceil(arr.length / 2);
  return [arr.slice(0, leftSize), arr.slice(leftSize)];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]