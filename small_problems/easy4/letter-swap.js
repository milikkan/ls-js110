/* 
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

1.
- i: a string
- o: another string
- r/e:
  - swap the first and last letters of each word in the given string input
    - a word is any sequence of adjacent characters, seperated by spaces
  - every word contains at least one letter, no empty strings
  - there will be at least one word in the input, if there is no space, input is single word
  - there will be no leading, trailing, or repeated spaces
- r/i:
  - preserve casing of letters while swapping
  - single letter word returns itself

2.
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

3.
- an array of strings to seperate words

4.
- high-level
  - seperate the word into words and swap each words first and last letters
- step-by-step
  - declare a variable `words` and assign it to the array of strings that is seperated by spaces
  - if the length of `words` is `1` and the length of string at index `0` is also `1`
    - return `words[0]` (guard clause)
  - declare a variable `result` and initialize it to `[]`  
  - iterate through the `words` array
    - swap first and last letters of each word (sub-algorithm: swapFirstAndLast)
    - push the new word into `result`
  - join the words in the `result` using single space as the seperator and return this joined string  

- sub-algorithm: swapFirstAndLast
  - if `str` is single letter return it (guard clause)
  - declare a variable `result` and initialize it with `''`
  - concat `result` with the last character of `str`
  - if `str` length is gretater than `2`
    - slice substring between index `1` and the `str.length - 1` and concat it to `result`
  - concat first character to `result`  
  - return `result`
*/

function swapFirstAndLast(word) {
  if (word.length === 1) return word;

  let result = '';
  result += word.charAt(word.length - 1);
  if (word.length > 2) {
    result += word.slice(1, word.length - 1);
  }
  result += word.charAt(0);
  return result;
}

// console.log(swapFirstAndLast('a')); // a
// console.log(swapFirstAndLast('Ab')); // bA
// console.log(swapFirstAndLast('what')); // thaw

function swap(str) {
  let words = str.split(' ');
  if (words.length === 1 && words[0].length === 1) return str;

  let result = words.map(word => swapFirstAndLast(word));
  return result.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"