/* 
Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

P:
- i: a string
- o: a boolean
- r/e:
  - return true if all alphabetic chars inside the string are uppercase
  - ignore non-alphabetic chars
- r/i:
  - empty str returns true

D: array for intermediate processing

A:
- high-level:
  - if uppercase version of str is equal to itself, return true
*/


function isUppercase(str) {
  return str.toUpperCase() === str;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true