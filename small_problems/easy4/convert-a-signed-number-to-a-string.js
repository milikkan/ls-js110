/* 
Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

You might also want to check the Math.sign() function.

1.
- r/e:
  - convert a number to a string, but this time include the sign
  - sign is `+` when there is no sign explicitly
  - sign is `-` when there is an exlicit `-` at the beginning
  - `0` has no sign
- r/i:
  - If there is an explicit `+` sign, result also starts with `'+'`

2.
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

3. None

4.
- high-level:
  - detect the sign of input, convert input to string and prepend the sign
- step-by-step
  - declare a variable `sign` and assign the result of `Math.sign(num)` to it
  - if `sign` is `0`, return "0" (guard clause)
  - if sign is `-1`, multiply number by `-1` to convert it to a positive number and reassign `num`
  - declare a `numStr` variable and assign the result of `integerToString(num)` function call
  - prepend `+` if sign is `1`, prepend `-` if sign is `-1` and return `numStr`  

*/

function integerToString(num) {
  if (num === 0) return '0';
  let digits = [];
  while (num >= 1) {
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return digits.join('');
}

function signedIntegerToString(num) {
  let sign = Math.sign(num);
  if (sign === 0) return '0';
  if (sign === -1) num = -num;
  let numStr = integerToString(num);
  return (sign === 1) ? '+'.concat(numStr) : '-'.concat(numStr);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

// TODO: further exploration