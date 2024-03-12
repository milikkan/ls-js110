/* 
Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

1. 
- input: a string
- output: an object
- rules:
  - explicit:
    - count words of different lengths and record the counts in an object
      - object key is the word length, value is number of words at that length
    - a word consists of any sequence of non-space characters
  - implict:
    - there is one space between each word
    - count every character, punctuation etc. until the space
    - empty string returns empty object 

2.
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

3. 
- array for storing words
- object for storing results

4.
- if length of input string is `0`, return `{}` (guard clause)
- declare variable `words`
- split input string using spaces and assign the resulting array to `words`
- declare a variable `result` and initialize it to `{}`
- iterate through the `words` array
  - declare a variable `letterCount` and assign the length of current word to it
  - if object contains a key that is equal to `letterCount`
    - increment current value by 1
  - else
    - create a key with `letterCount` and assing `1` to it
- return `result`

*/

function wordSizes(str) {
  if (str.length === 0) return {};
  
  let words = str.split(' ');
  let result = {};

  words.forEach(currentWord => {
    let letterCount = currentWord.length;
    result[letterCount] = (result[letterCount] + 1) || 1;
  });
  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}