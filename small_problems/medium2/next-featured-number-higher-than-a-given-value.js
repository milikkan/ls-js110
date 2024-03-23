/* 
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

P:
- i: a number
- o: another number
- r/e:
  - return the next featured number greater than the input
    - featured number: odd, multiple of seven, has all its digits different
  - if there is no featured number greater than input, return an error message
- r/i:
  - input is always a positive integer
  - the input is not included, for example if input is 21, return 35, or the next featured number

D: None

A:
- high-level:
  - find first multiple of 7 greater than input. Starting from this number, start a loop. Add 7 t the number at each iteration and return the number if it is featured.
- step-by-step:
  - find first multiple of 7 after input
    - declare a variable firstMultOfSeven and assing it to input plus 1
    - starting from count and adding 1 each time to firstMultOfSeven, check if it is a multiple
  - start a loop from firstMultOfSeven until the max featured number
    - check if current number is features, if so return it
  - return error string
- isFeaturedNumber
  - return true if number is odd and if all of its digits are uniq
- hasUniqDigits
  - convert the string into its digits
  - count the digits and store in an objects
  - return true if all values are 1
*/

function featured(num) {
  let firstMultOfSeven = num + 1;
  while (firstMultOfSeven % 7 !== 0) {
    firstMultOfSeven += 1;
  }
  
  const MAX_FEATURED_NUMBER = 9876543201;

  for (let count = firstMultOfSeven; count <= MAX_FEATURED_NUMBER; count += 7) {
    if (isFeatured(count)) {
      return count;
    }
  }
  return 'There is no possible number that fulfills those requirements.';
}

function isFeatured(num) {
  return num % 2 === 1 && hasUniqDigits(num);
}

function hasUniqDigits(num) {
  let numStr = String(num);
  let digitCounts = {};
  [...numStr].forEach(digit => {
    let currentCount = digitCounts[digit] || 0;
    digitCounts[digit] = currentCount + 1;
  });
  return Object.values(digitCounts).every(count => count === 1);
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."