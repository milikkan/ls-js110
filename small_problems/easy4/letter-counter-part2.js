/* 
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

1.
- rules:
  - explicit:
    - do not count non-lettes when determining word length (length of "it's" is 3, not 4)
2.
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

3.
- an array and an objecte

4.
- if length of input string is `0`, return `{}` (guard clause)
- declare variable `words`
- split input string using spaces and assign the resulting array to `words`
- declare a variable `result` and initialize it to `{}`
- iterate through the `words` array
  - declare a variable `letterCount` and assign the length of current word to it
    - sub-algorithm: determine word length
  - if object contains a key that is equal to `letterCount`
    - increment current value by 1
  - else
    - create a key with `letterCount` and assing `1` to it
- return `result`

sub-algorithm: determine word length:
- declare a variable `wordLength` and initialize to `0`
- iterate through the letters of the lowercase version of `word`
  - if `currentChar` is <= 'z' or >= 'a'
    - add `1` to `wordLength`
- return `wordLength`

*/

function determineLength(word) {
  let wordLength = 0;
  word.toLowerCase().split('').forEach(currentChar => {
    if (currentChar <= 'z' && currentChar >= 'a') {
      wordLength += 1;
    }
  });

  return wordLength;
}

function wordSizes(str) {
  if (str.length === 0) return {};
  
  let words = str.split(' ');
  let result = {};

  words.forEach(currentWord => {
    let letterCount = determineLength(currentWord);
    result[letterCount] = result[letterCount] || 0;
    result[letterCount] += 1;
  });
  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}