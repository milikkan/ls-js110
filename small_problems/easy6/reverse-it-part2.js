/* 
Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

1.
- i: a str
- o: a new str
- r/e:
  - return the input its words reversed, reversed only words that has 5 or more chars
  - str will only consist of letters and spaces
  - words will be seperated by a single space
- r/i:
  - keep casing

2.
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

3. an array

4.
- high-level:
  - convert the str into an arr, iterate through the array, reverse the word if its length is greater than or equal to 5 during iteration, finally join the array using single space and return as str.
- step-by-step:
  - define a function `reverseWords` that takes arg `str`
  - declare a var `words` and init to the words of `str` seperated by a space
  - iterate through `words` arr
    - declare `word` and assign current word to it
    - if `word` has 5 or more chars
      - reverse it and reassign the word at index (mutate `words`)
        - `reverseSingleWord algorithm
  - join `words` using a single space and return as a str

- reverseSingleWord
  - seperate the `str` into chars and convert to array, reverse the array, join again usin empty str and return
*/


function reverseSingleWord(str) {
  return str.split('').reverse().join('');
}

function reverseWords(str) {
  let words = str.split(' ');
  let wordsReversed = words.map(word => word.length >= 5 ? reverseSingleWord(word) : word);
  return wordsReversed.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"