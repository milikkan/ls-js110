/* 
1. Understanding the Problem
- input : 6 numbers from user
- output: a message to the console
- rules :
  - explicit :
    - Take 6 numbers from user
      - The prompt is: "Enter the 1st number:" etc.
    - Check if the 6th number is among the first 5 and output result
      - One blank line
      - Result. Format is "The number number6 appears/does not appear in number1,number2,number3,number4,number5."
  - implicit :
    - The prompt includes 1st, 2nd, 3rd, 4th, 5th for the first 5 numbers and 'last' for the 6th number
    - need to convert input from string to number, what happens if the number is invalid, should I try to validate input?
      - I will prompt user to reenter if the number is not valid

2. Examples / Test Cases

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

3. Data Structure:
- mental model:
  - 25, 15, 20, 17, 23 -> 17 -> appears in first 5
  - 25, 15, 20, 17, 23 -> 18 -> does not appear
  - save the first 5 numbers somewhere and check if the last number is among them.
  - I can use an array to save the numbers.

4. Algorithm:
- declare `numbers` array and initialize it to `[]`
- prompt for the number five times (iterate 5 times)
  - generate prompt based on current number (1st, 2nd, 3rd, 4th, 5th)
  - validate input
  - save input to `numbers`
- declare `lastNumber` variable, prompt for the last number and save it to `lastNumber`
- validate last number
- check if `last` is among `numbers` and print the result to console 
*/


const readline = require('readline-sync');

let numbers = [];

function formatNumber(num) {
  let suffix;
  switch (num) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default: suffix = 'th';
  }
  return num + suffix;
}

function invalidNumber(num) {
  return num === '' || Number.isNaN(Number(num));
}

for (let count = 1; count <= 5; count++) {
  let currentNumber = readline.question(`Enter the ${formatNumber(count)} number: `);
  while (invalidNumber(currentNumber)) {
    currentNumber = readline.question('Please enter a valid number: ');
  }
  numbers.push(currentNumber);
}

let lastNumber = readline.question('Enter the last number: ');
while (invalidNumber(lastNumber)) {
  lastNumber = readline.question('Please enter a valid number: ');
}

if (numbers.includes(lastNumber)) {
  console.log(`\nThe number ${lastNumber} appears in ${numbers.join()}.`);
} else {
  console.log(`\nThe number ${lastNumber} does not appear in ${numbers.join()}.`);
}

// TODO: further exploration