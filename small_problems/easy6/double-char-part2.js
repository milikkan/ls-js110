/* 
Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

1.
- i: a string
- o: a new string
- r/e:
  - double every consonant char
  - do not double vowels, digits, or others
- r/i:
  - empty string returns empty string

2.
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

3. an array

4.
- high-level:
  - create an empty array, iterate through the chars of the string, double consonants while iterating and push to the array. Return the array as a string.
- step-by-step:
  - define a function `doubleConsonants` that takes a parameter `str`
  - if `str` length is `0`, return `''` (guard claue)
  - declare a variable `result` and init to `[]`
  - iterate throught the chars of the string
    - push `char` once into `result`
    - if the current char is a consonant (isConsonant algorithm)
      - push it twice into `result` array
  - convert `result` to a string and return
- `isConsonant` algorithm
  - if lowecase version of `char` is less than or equal to `z` and greater than or equal to `a`
    - and `char` is not `[a, e, i, o, u]` return `true`
  - else return `false`
*/

function isConsonant(char) {
  let charLower = char.toLowerCase();
  return charLower <= 'z'
    && charLower >= 'a'
    && !['a', 'e', 'i', 'o', 'u'].includes(charLower);
}

// function doubleConsonants(str) {
//   if (str.length === 0) return '';
//   let result = [];
//   str.split('').forEach(char => {
//     result.push(char);
//     if (isConsonant(char)) {
//       result.push(char);
//     }
//   });
//   return result.join('');
// }

// using reduce
function doubleConsonants(str) {
  if (str.length === 0) return '';
  return str.split('').reduce((acc, char) => {
    acc += char;
    if (isConsonant(char)) acc += char;
    return acc;
  }, '');
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""