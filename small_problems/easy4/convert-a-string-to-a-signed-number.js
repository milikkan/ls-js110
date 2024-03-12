/* 
Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

1.
- r/e:
  - string may have leading `+` or `-` characters
    - if the first character is `+`, return a positive number
    - if the first character is `-`, return a negative number
    - if the first character is neither `+` nor `-`, return a positive number
  - input is always a valid number
  - do not use `parseInt` or `Number` functions, use `stringToInteger` from previous exercise  
- r/i:
  - I assume the string always starts with `+`, `-` or a digit other than `0`
  - If there is no `+` or `-` as the first char, first char is a digit other than `0`

2.
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

3. array

4.
- take first char, if it is not `+` or `-`
  - convert the input using `stringToInteger` function
- else
  - slice the substring starting at index 1 and extends until the end of string
  - convert substring to number using the `stringToInteger` function
  - if firstChar is `-`
    - return `-result`
  - else
    - return `result` 
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

function stringToSignedInteger(str) {
  let firstChar = str.charAt(0);
  if (firstChar !== '+' && firstChar !== '-') {
    return stringToInteger(str);
  }
  let number = stringToInteger(str.slice(1));
  return (firstChar === '-') ? -number : number;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true