/* 
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

1.
- i: two array of numbers
- o: a new array of numbers
- r/e:
  - return a new array that will contain the products of all number combinations
  - returned array will be sorted in ascending order
  - input arrays will not be empty

2.
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

3. array

4.
- high-level:
  - iterate through the first array, on each iteration iterate through the second array and place the product of each number into a new array. Sort the new array and return.
- step-by-step:
  - define a function `multiplyAllPairs` that takes two array arguments (`arr1`, `arr2`)
  - declare a variable `result` and init to `[]`
  - iterate through `arr1`
    - iterate through `arr2`
      - push product of current numbers from each array into `result`
  - sort result in ascending order and return    

*/

function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => result.push(num1 * num2));
  });
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]