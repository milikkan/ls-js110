/* 
Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

1.
- i: a string
- o: a number
- r/e:
  - convert a string of digits into a number
  - do not use `parseInt` or `Number` functions
  - input will not contain leading `+` or `-` signs
  - input will only contain numeric characters (`0` to `9`)
- r/i:
  - I assume there will be no leading `0` character

2.
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

3.
- an array to split and process individual digits

4.
- high-level:
  - split each digit, convert to number, multiply by each digit by the correct multitude of `10` and add the resulting numbers
    (example: "570" => ['5', '7', '0'] => [5, 7, 0] => 5 * 10^2 + 7 * 10 ^ 1 + 0 * 10 ^ 0 = 500 + 70 + 0 = 570)
- step-by-step
  - declare a `digits` variable and assign it to the array of digits
  - declare a `result` variable and init with `0`
  - declare a `multiplier` variable and init with `digits.length - 1`
  - iterate through `digits` array
    - convert `digit` to a number (sub-algorithm coerceToNum)
    - multiply digit by 10 to the power of `multiplier` and the result to `result`
    - decrement `multiplier` by `1`
  - return `result`  

- sub-algorithm: coerceToNum
  - check if the input digit (a string digit) is equal to a specific numeric digit
  - return the numeric digit to which the string digit is equals
*/

function coerceToNum(strDigit) {
  switch (strDigit) {
    case '0': return 0;
    case '1': return 1;
    case '2': return 2;
    case '3': return 3;
    case '4': return 4;
    case '5': return 5;
    case '6': return 6;
    case '7': return 7;
    case '8': return 8;
    case '9': return 9;
  }
}

// function stringToInteger(str) {
//   let digits = str.split('');
//   let result = 0;
//   let multiplier = digits.length - 1;
//   digits.forEach(digit => {
//     let numDigit = coerceToNum(digit);
//     result += numDigit * (10 ** multiplier);
//     multiplier -= 1;
//   });
//   return result;
// }

// using reduce
function stringToInteger(str) {
  let digits = str.split('');
  let multiplier = digits.length - 1;
  return digits.reduce((acc, digit) => {
    let numDigit = coerceToNum(digit);
    acc += numDigit * (10 ** multiplier);
    multiplier -= 1;
    return acc;
  }, 0);
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

// TODO: solve further exploration