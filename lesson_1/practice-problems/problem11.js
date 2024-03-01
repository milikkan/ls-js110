// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let frequency = {};
// statement.split('').forEach(char => {
//   if (char === ' ') return;
//   if (frequency.hasOwnProperty(char)) {
//     frequency[char] += 1;
//   } else {
//     frequency[char] = 1;
//   }
// });

// another way
let statementChars = statement.split('').filter(char => char !== ' ');
statementChars.forEach(char => {
  frequency[char] = frequency[char] || 0;
  frequency[char] += 1;
});

console.log(frequency);