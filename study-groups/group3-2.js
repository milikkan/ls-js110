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
- r/i:
  - input array is sorted in ascending order
  - numbers are unique, no same number appear more than once
 
2.
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

3. array

4.
/*

/*
- declare a count variable and init to 0
- start iterating from 0 to (arr.length - 2)
  - declare variable firstNum and assign to the number at current loop index
  - declare a varible delta and init to 1
  - start a loop that loops until (num + delta > last element of array)
    - declare a variable secondNum and assign the result of (firstNum + delta)
    - declare a variable thirdNum and assign the result of (secondNum + delta)
    - if (both secondNum and thirdNum exists in the array)
      - increment count
    - increment delta
- return count
*/

function progressions(arr) {
  let count = 0;

  for (let idx = 0; idx < arr.length - 2; idx++) {
    let firstNum = arr[idx];
    let delta = 1;
    while (firstNum + delta <= arr[arr.length - 1]) {
      let secondNum = firstNum + delta;
      let thirdNum = secondNum + delta;
      if (arr.includes(secondNum) && arr.includes(thirdNum)) {
        count += 1;
      }
      delta += 1;
    }
  }

  return count;
}

console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10


/*
Input: array (sorted in ascending order)
Output: number 

Return the # progressions (must be 3 elements) that are possible from array we're given
Rule: the difference between the elements must be the same

[1, 2, 3, 5, 7, 9] 

[1, 2, 3] - adding one
[1, 3, 5] - adding 2
[] - adding 3
[1, 5, 9] - adding 4
[] adding 5 or more


X [2, 3, ] - adding 1 
[2, ]

[3, ] - adding 1
[3, 5, 7]

[5, 7, 9] - adding 2

Algo: 
- high-level:
  - iterate through the numbers of input array
  - take the difference between current number and next number
  - loop until 3 numbers selected or (num + diff > last number of array)
    - starting from the current number, add the diff to the current number
    - check if there is a matching number ahead
      - if there is increment count
      - make the current number to the matched number

- example run:
  - input: [1, 2, 3, 5, 7, 9]
  - num = 2
  - nextNum = 3
  - seqCount = 3
  - diff = 1

  - count = 2
  - currentNum = 3
  - 3 + 1 = 4
- step-by-step
  - declare var seqCount and init to 0
  - iterate through the array (`idx` = start at 0 and loop until `arr.length - 2`)
    - declare variable num and assing to arr[idx]
    - declare variable nextNum and assing to arr[Idx + 1]
    - declare variable diff and assign to (nextNum - num)
    - declare variable count and init to 1
    - iterate through the array (`innerIdx` = start at (idx + 1) and loop until `arr.length - 1`)  
      - if (num + diff) is present among remaining numbers after the num
        - increment count
        - reassign num to (num + diff)
      - else
        - break (this means there is no progression)
*/




// Test Cases
// console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
// console.log(progressions([1, 2, 3, 4, 5]));    // 4
// console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10