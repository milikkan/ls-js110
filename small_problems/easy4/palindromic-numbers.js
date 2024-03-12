/* 
Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

1.
- input: a number
- output: boolean
- rules:
  - explicit:
    - if integer argument is palindromic (reads same forwards and backwards) return true.
  - implicit:
    - if number is single digit, it is assumed as palindromic  

2.
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

3. an array

4. 
- declare variable `numStr` and assign it the input converted to String
- declare variable `numStrReversed`
- split digits of `numStr` as an array of digits, then reverse this array, then join this array as a string and assign the result to `numStrReversed`
- return the result of the equality comparison of `numStr` and `numStrReversed`

*/

function isPalindromicNumber(num) {
  let numStr = String(num);
  let numStrReversed = numStr.split('').reverse().join('');
  return numStr === numStrReversed;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true