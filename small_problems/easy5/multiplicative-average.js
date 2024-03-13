/* 
Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

1.
- i: an array integers
- o: a string
- r/e:
  - multiply all of the integers together, divide it by the length of array
  - format the result as a string with 3 decimal values
- r/i:
  - what happens if input array is empty, I will return "0.000"
  - I assume input is always an array of integers
2.
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

3. array

4.
- if input is empty array, return "0.000"
- if array has 1 elemetn, return the number at index `0` formatted with 3 decimal places
- declare a `result` variable and initilize it to `1`
- iterate through the array
  - multipy current integer with `result` and reassign `result` to the result of multiplication
- return `result` divided by the length or array formatted as a string with 3 decimal places
*/

function multiplicativeAverage(arr) {
  if (arr.length === 0) return (0).toFixed(3);
  if (arr.length === 1) return arr[0].toFixed(3);
  let result = 1;
  arr.forEach(num => result *= num);
  return (result / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
console.log(multiplicativeAverage([]));                       // "0.000"
console.log(multiplicativeAverage([1]));                      // "1.000"