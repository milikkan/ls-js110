/* 
A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps. At that point, the array is completely sorted.

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

P:
- i: an array
- o: same array sorted
- r/e:
  - sort array using bubble sort algorithm
    - compare two adjacent numbers and swap them if the first one is greater than the last one
    - continue comparing until the end of the array
    - stop when there is no swap in a pass
  - mutate the input array
  - array contains at least 2 elements
- r/i:
  - array elements can be strings but this doesn't affect sorting logic

D: array

A:
- step-by-step
  - declare a variable `swap` and init to `true`
  - start a loop that iterates as long as `swap` is `true`
    - reassign `swap` to `false`
    - start a loop from 0 until the arr.length - 2
      - compare element at index with element index + 1
        - if first is greater, swap them
        - set swap to `true`
  - return array
*/

function bubbleSort(arr) {
  let swap = true;

  while (swap) {
    swap = false;
    for (let idx = 0; idx <= arr.length - 2; idx++) {
      if (arr[idx] > arr[idx + 1]) {
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        swap = true;
      }
    }
  }

  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]