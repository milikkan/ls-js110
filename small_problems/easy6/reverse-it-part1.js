/* 
Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

1.
- i: a string
- o: a new string
- r/e:
  - return the input string its words reversed
  - words are seperated by spaces
- r/i:
  - I assume there is single space between words
  - empty string returns empty string
  - keep casing of letters, just reverse words

2.
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

3. array

4.
- high-level:
  - convert input string to an array of words and reverse the array, then return the words joined with spaces.
- step-by-step:
  - define function `reverseSentence` taking an argument `str`
  - if `str` is '', return ''.
  - split `str` by spaces and convert to array, reverse the array, join the array using spaces and return
*/

function reverseSentence(str) {
  if (str.length === 0) return '';
  return str.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"