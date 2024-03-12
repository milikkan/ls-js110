/* 
Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

1.
- i: a number
- o: a string
- r/e:
  - convert number to its string representation and do not use functions such as `String` or `toString`
  - input is non-negative (`0` or positive)

2.
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

3. An array to store individual digits

4.
- high-level
  - detect each single digit of the input number and convert them to string, then join them together
- step-by-step (input is `num`)
  - if `num` is 0, return "0"
  - declare a variable `digits` and init with `[]`
  - start a loop that runs until `num` is less than `1`
    - find the remainder when `num` divided by `10` and push it to the beginning of `digits` array
    - divide num by `10` and reassign `Math.floor(result)` to `num`
  - join the elements of `digits` array and return as a string
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

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
console.log(integerToString(1));  // "1"