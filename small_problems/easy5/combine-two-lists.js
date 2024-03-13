/* 
Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

1.
- i: 2 arrays
- o: a new array
- r/e:
  - combine two arrays by taking alternating elements from both arrays (1 item from first, then 1 item from second)
  - both arrays are non-empty
  - both arrays have same length

2.
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

3. array

4.
- high-level:
  - start a loop until the length of one of the input arrays. At each iteration, grab the item at current index from first array and push to the new result array, then do the same for the second array.
- step-by-step:
  - declare a variable `result` and init to `[]`
  - start a loop that runs until the length of the first array (`index`)
    - take item at index `index` of first array and push to `result`
    - take item at index `index` of second array and push to `result`
  - return `result`
*/

// function interleave(arr1, arr2) {
//   let result = [];
//   for (let index = 0; index < arr1.length; index++) {
//     // result.push(arr1[index]);
//     // result.push(arr2[index]);
//     result.push(arr1[index], arr2[index]);
//   }
//   return result;
// }

// using forEach
// function interleave(arr1, arr2) {
//   let result = [];
//   arr1.forEach((item, index) => {
//     result.push(item, arr2[index]);
//   })
//   return result;
// }

// using map
// function interleave(arr1, arr2) {
//   let result = Array(arr1.length * 2).fill(0);
//   let first = true;
//   return result.map(_ => {
//     let nextItem = first ? arr1.shift() : arr2.shift();
//     first = !first;
//     return nextItem;  
//   });
// }

// using reduce
function interleave(arr1, arr2) {
  return arr1.reduce((acc, value, idx) => {
    acc.push(value, arr2[idx]);
    return acc;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]