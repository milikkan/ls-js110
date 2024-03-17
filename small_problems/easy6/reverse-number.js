/* 
Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

1.
- i: a positive number (not 0 or negative)
- o: a number
- r/e:
  - reverse the digits of input number
- r/i:
  - if number has zeros at the end, when it is reversed, drop leading zeros
  - if number is single digit, return itself

  2.
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

3. array

4.
- high-level:
  - convert number to string, seperate each digit and convert to array, reverse the array, join as string and convert to number.
*/

function reverseNumber(num) {
  let numStr = String(num);
  if (numStr.length === 1) return num;
  let numStrReversed = numStr.split('').reverse().join('');
  return Number(numStrReversed);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1