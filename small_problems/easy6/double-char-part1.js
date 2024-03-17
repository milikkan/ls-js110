/* 
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

1.
- i: a string
- o: a new string
- r/e:
  - double every character in the string
- r/i:
  - empty string returns empty string
  - if same char repeats in the string, double each one, do not eliminate any
  - double every char, including non-alphabetic ones and spaces

2.
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

3. none

4.
- high-level:
  - iterate through the string, repeat every char twice and concat to a new string during each iteration.
- step-by-step:
  - define a function `repeater` that takes a parameter `str`
  - if `str` is empty, return empty string (guard clause)
  - declare variable `result` and init to empty string
  - start a loop that will traverse all chars (loop counter is `idx`)
    - declare variable `currentChar` and init to the char at `idx` pos of `str`
    - concat `currentChar` twice with `result`
  - return `result`
  
*/

function repeater(str) {
  if (str.length === 0) return '';
  let result = '';
  for (let idx = 0; idx < str.length; idx++) {
    let currentChar = str.charAt(idx);
    result += currentChar.repeat(2);
  }
  return result;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""