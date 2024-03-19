/* 
Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

P:
- i: a string
- o: a new string
- r/e:
  - First char will be capitalized, then next char will be lowercase, and so on
  - non-alphabetic chars should be counted as chars for determinig when to switch between upper and lowes case

A:
- high-level:
  - Iterate through the string, make first char uppercase, and continue alternating between lower and upper case.
- step-by-step:
  - declare a variable `result` and init to empty string
  - declare a variable `upper` and init to `true`
  - iterate through the chars of the input string
    - if `upper` is true make the current char uppercase and concat to `result`
    - negate `upper`
  - return `result`
*/

function staggeredCase(str) {
  let result = '';
  let upper = true;
  [...str].forEach(char => {
    if (upper) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
    upper = !upper;
  });
  return result;
}

console.log(staggeredCase('I Love Launch School!') === "I LoVe lAuNcH ScHoOl!");           // true
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");                                     // true
console.log(staggeredCase('ignore 77 the 4444 numbers') === "IgNoRe 77 ThE 4444 nUmBeRs"); // true