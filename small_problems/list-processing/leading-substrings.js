/* 
Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

P:
- i: a str
- o: an array of str
- r/e:
  - return an array of substrings of the substring
  - each substring should begin with the first letter
  - list should be ordered by the lengths of the substrings
- r/i:
  - single letter str returns a single element array

  D: Array

A:
- high-level:
  - iterate through the chars of str, at each iteration concat current char to the substring at the last index of the array, and push the new str to the array. Return the array.

*/

// function leadingSubstrings(str) {
//   let result = [];
//   [...str].forEach(char => {
//     let prevStr = result.length !== 0 ? result[result.length - 1] : '';
//     result.push(prevStr + char);
//   });
//   return result;
// }

// using map
// function leadingSubstrings(str) {
//   let prevStr = '';
//   return [...str].map(char => {
//     let substr = prevStr + char;
//     prevStr = substr;
//     return substr;
//   });
// }

// using for loop
function leadingSubstrings(str) {
  let result = [];
  for (let idx = 1; idx <= str.length; idx++) {
    result.push(str.slice(0, idx));
  }
  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]