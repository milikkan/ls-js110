/*
Sum of Numbers
Implement a function that calculates the sum of numbers inside of a string.
Example: "L12aun3ch Sch3oo45l" should output 63.

You can expect that the string will include only positive numbers.

P
- Declare a function that takes a string and returns a number. The number is created by adding together the numbers that appear in the string.

Examples/Rules
- Only positive integers will be included
- When there is no number in the string return 0
- Don't add individual digits, e.g. 12 is 12, not 1 and 2

D
- Input: string
- Output: integer
- Intermediate data structures: 
  - Array of numbers and not-numbers
  - Use the input string and iterate over it
  - Use a variable `sum` to accumulate numbers
  - Array of the numbers in the string

A
- High-level strategy
  - Fuad
    - Create an array of numbers and non-numbers, extract just numbers, sum numbers
  - Mustafa
    - Iterate through the string, detect consecutive digits, convert the digits to integers and accumulate in a variable
  - Clare
    - Turn string into array of numbers, then sum the numbers

- Step-by-step algorithm:
  - define a function `sumOfNumbers` that take an argument `str`
  - declare a variable `sum` and init to `0`
  - declare a variable `numStr` and init to empty string
  - iterate through the string
    - declare a variable `char` and assign current character of string
    - if `char` is less than or equal to `9` and greater than or equal to `0`
      - concat `char` to `numStr`
    - else
      - if `numStr` is not empty string
        - convert `numStr` to a number and add to `sum`
        - reassign `numStr` to empty string
  - if `numStr` is not empty string
    - convert `numStr` to a number and add to `sum`
  - return `sum`

- test1:
  - str = "HE2LL3O W1OR5LD"
    - sum = 9
    - numStr = ''
    - char = 'D'

## Aaron

create a function that takes in a string
replace every letter in the string with a '-'
  - 1. use built in method to do that or
  - 2. iterate over the string and replace any elem that isn't of type number (you might need to split into an array to do this then join the array into a string again.)
split the string into an array at the '-'
if the language you are using doesn't remove the '-' when you're splitting, filter out any non numbers
sum the array
return the sum

## My own ideas on top of Aaron's

- create a function that takes in a string
- replace every letter in the string with a '-'
  - 1. use built in method to do that or
  - 2. iterate over the string and replace any elem that isn't of type number (you might need to split into an array to do this then join the array into a string again.)
- iterate through the new array, which has all digits and all other characters replaced by '-'
  - eliminate consecutive '-' chars, so that only digits and a single '-' char is left between digits
- join the characters of the array
- split the string into an array at the '-'
- sum the array
- return the sum
*/

function sumOfNumbers(str) {
  let allCharsArr = str.split('').map(currentChar => {
    if (Number.isNaN(Number(currentChar))) {
      return '-';
    }
    return currentChar;
  });
  
  let digits = allCharsArr.reduce((acc, char) => {
    if (char !== '-') {
      acc.push(char);
    }
    if (char === '-' && acc[acc.length - 1] !== '-') {
      acc.push('-');
    }
    return acc;
  }, []).join('');

  return digits.split('-').reduce((acc, num) => acc + Number(num), 0);
}

// function sumOfNumbers(str) {
//   let sum = 0;
//   let numStr = '';
//   for (let idx = 0; idx < str.length; idx++) {
//     let char = str[idx];
//     if (char <= '9' && char >= '0') {
//       numStr += char;
//     } else {
//       if (numStr !== '') {
//         sum += Number(numStr);
//         numStr = '';
//       }
//     }
//   }
//   if (numStr !== '') {
//     sum += Number(numStr);
//   }
//   return sum;
// }

// Test Cases
console.log(sumOfNumbers("HI") === 0);
console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("L12aun3ch Sch3ool45") === 63);
console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);
