/* 
Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

1.
- i: two arrays
- o: a new array
- r/e:
  - returned array will contain each value only one time.
    - same value can repeat in input arrays, return only one of the values in the result
  - both arguments will be arrays
- r/i:
  - array can contain any type of values
  - if both arrays are empty, result should be empty array
  - if one of the arrays is empty, result should be the unique values of the other

2.
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

3. array

4.
- high-level:
  - declare a new array, iterate through both arrays and push the element to the new array if not already present.
- step-by-step (inputs: two arrays, `arr1` and `arr2`)
  - declare a `result` variable and initialize to `[]`
  - add uniq elements of `arr1` to `result`
  - add unit elements of `arr2` to `result`
  
- sub-algorithm: addUniqInto (inputs: `arr` is an array, `target` is an array)
  - iterate through `arr`
    - if current element is not in `target`
      - push it to `target`
*/

function addUniqInto(arr, target) {
  arr.forEach(current => {
    if (!target.includes(current)) {
      target.push(current);
    }
  });
}

function union(arr1, arr2) {
  let result = [];
  addUniqInto(arr1, result);
  addUniqInto(arr2, result);
  return result;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]