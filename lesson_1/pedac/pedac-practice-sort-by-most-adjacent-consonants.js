/* 
## 1. Understand the Problem:

- input: an array of strings
- output: an array of strings (a new array)
- rules:
  - explicit:
    - return a new array of strings where the strings are sorted to the highest number of adjacent consonants a particular string contains
    - when two strings have the same number of adjacent consonants, they should preserve their original order in the result array
    - adjacent consonants:
      - they are next to each other in the same word
      - there is a space between two consonants in adjacent words
    - letters 'y' and 'w' are treated as consonants  
  - implicit:
    - wovels are 'a', 'e', 'i', 'o', 'u'. All remaining letters are consonants
    - no character other than space can be between two consonants
    - if there is no consonants in a word, it means 0
    - I assume, empty string means 0 consonants
    - I assume empty array will return empty array
    - single consonants do not affect sort order. Only adjacent consonants affect sort order.

- questions:
  - Is it possible that there are more than one space between words?
  - Should I take letter case into consideration? Is 'B' equal to 'b'?
  - Is the order ascending or descending?

## 2. Examples / Test Cases:

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']

* order is descending
* all letters are lowercase

## 3. Data Structure:
* I will use an array
* It can be helpful to use an object to save the number of adjacent consonants each word has

## 4. Algorithm:
- create an object that has keys for the adjacent consonant count and values as an array to the strings that has the number of adjacent consonants equals to the key
- iterate through the input array
  - count number of adjacent consonants for each string
  - put counts in an object
    - if object has a key for the current count
      - push the current string to the array value for the current key
    - else
      - create a new key and assing an array that has the string as its elemment to the key
- generate the result array from counts object
  - get the values of the object as an array
  - flatten the array and return as result


* subproblem: count number of adjacent consonants for each string

- declare a tempStr variable and initialize it to ''
- declare a variable count and initialize to 0
- iterate through the string
  - get currect character and assign it to currentChar variable
  - if currentChar is a space do nothing
  - if currentChar is consonant
    - concat currentChar to tempStr
  - else
    - if length of tempStr is greater than count, assign count to the length of tempStr
    - reassign tempStr to ''
- if count is 1, return 0
- return count
*/

function findMaxAdjacentConsonant(str) {
  const VOWELS = 'aeiou';
  let tempStr = '';
  let count = 0;
  for (let idx = 0; idx < str.length; idx++) {
    let currentChar = str.charAt(idx);
    if (currentChar === ' ') continue;

    if (!VOWELS.includes(currentChar)) {
      tempStr += currentChar;
    } 
    
    if (VOWELS.includes(currentChar) || idx === (str.length - 1)) {
      if (tempStr.length > count) {
        count = tempStr.length;
      }
      tempStr = '';
    }
  }
  if (count === 1) return 0;
  return count;
}

// console.log(findMaxAdjacentConsonant('aa')); // 0
// console.log(findMaxAdjacentConsonant('baa')); // 0
// console.log(findMaxAdjacentConsonant('ccaa')); // 2
// console.log(findMaxAdjacentConsonant('dddaa')); // 3
// console.log(findMaxAdjacentConsonant('can can')); // 2
// console.log(findMaxAdjacentConsonant('salt pan')); // 3

function sortStringsByConsonants(strings) {
  let counts = {};
  
  strings.forEach(str => {
    let currentCount = findMaxAdjacentConsonant(str);
    if (counts.hasOwnProperty(currentCount)) {
      counts[currentCount].push(str);
    } else {
      counts[currentCount] = [str];
    }
  });

  let sortedKeys = Object.keys(counts).sort((a, b) => b - a);
  let result = [];
  sortedKeys.forEach(key => {
    counts[key].forEach(str => result.push(str));
  });
  return result;
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']