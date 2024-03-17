/* 
You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.

1.
- i: an array of ints
- o: a number
- r/e:
  - return the number of arithmetic progressions of size 3
    arithmetic progression: a sequence of numbers that have same differences
 
2.
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

3. array

4.
- high-level:
  - generate all 3 element sub arrays
  - check each one and select the ones that have same differences
  - return the count
- example:
  - [1, 2, 3, 5, 7, 9] -> 5
  - [1, 2, 3] [1, 2, 5] [1, 2, 7] [1, 2, 9] [1, 3, 5] [1, 3, 7] [1, 3, 9] [1, 5, 7] [1, 5, 9] [1, 7, 9]
    [2, 3, 5] [2, 3, 7] [2, 3, 9] [2, 5, 7] [2, 5, 9]
    [3, 5, 7] [3, 5, 9] [3, 7, 9]
    [5, 7, 9]
  - [1, 2, 3] [1, 3, 5] [1, 5, 9] [3, 5, 7] [5, 7, 9]   
- step-by-step
  - declare a `subArrs` var and init to `[]`
  - generate all 3 element sub-arrs and push to `subArrs`
  - iterate through `subArrs` and select only the ones that are progressions
  - return count of selection
- sub-algorithm
  - generating sub-arrays
    - iterate through the array (`idx`) until array.length - 2
      - iterate through the array starting from (`innerIdx` = `idx + 1`) until array.length - 2
        - slice subarray [arr[idx], arr[innerIdx], arr[innerIdx + 1]]
- sub-algorithm
  - iterate through the subarray
    - claculate diff between 1st and 2nd
    - claculate diff between 2nd and 3rd
    - return true if 2 diffs are same  
*/

function generateSubArrays(arr) {
  let result = [];
  for (let idx = 0; idx < arr.length - 2; idx++) {
    for (let innerIdx = idx + 1; innerIdx < arr.length - 1; innerIdx++) {
      for (let third = innerIdx + 1; third < arr.length; third++) {
        let subArr = [arr[idx], arr[innerIdx], arr[third]];
        result.push(subArr);
      }
    }
  }
  return result;
}

function isProgression(subArr) {
  let diff1 = subArr[0] - subArr[1];
  return diff1 === subArr[1] - subArr[2];
}


function progressions(arr) {
  return generateSubArrays(arr).filter(subArr => isProgression(subArr)).length;
}

console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10