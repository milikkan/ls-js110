/* 
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

A:
- start a loop from the length of num down to 2
  - rotate num
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

function maxRotation(num) {
  let count = String(num).length;
  while (count > 1) {
    num = rotateRightmostDigits(num, count);
    count -= 1;
  }
  return num;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845