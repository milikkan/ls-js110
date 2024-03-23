/* 
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

P:
- i: a number, and a count
- o: another number
- r/e:
  - rotate the last `count` digits
  - rotation means taking the first digit, shifting the remaining digits and adding the first digit at the end
- r/i:
  - if `count` is one, rotation doesn't change the number
  - I assume `count` is a number between 1 and the length of the number

D: use array for intermediate digit processing

A:
- high-level:
  - slice the last `count` digits, rotate the sliced number, merge first part of the slice with the rotated part
- algorithm:
  - if `count` is 1, return number (guard clause)
  - declare `numStr` variable and assign the string version of number
  - declare a `firstPart` variable and assign `numStr` sliced from first index position until the (length - count) position
  - declare a `secondPart` variable and assign `numStr` sliced from (length - count) position until the end
  - rotate `secondPart`
  - concat `firstPart` and rotated `secondPart` and coerce to number and returm
- rotation
  - convert string to array and return a shallow copy
  - slice first char, append to remaining chars, join and return
*/

function rotate(str) {
  let strArr = [...str];
  return strArr.slice(1).concat(strArr[0]).join('');
}

function rotateRightmostDigits(num, count) {
  if (count === 1) return num;
  let numStr = String(num);
  let firstPart = numStr.slice(0, numStr.length - count);
  let secondPart = numStr.slice(numStr.length - count);
  return Number(firstPart + rotate(secondPart));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917