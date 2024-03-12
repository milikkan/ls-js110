/* 
1. Understanding the Problem:
- input : a string
- output: boolean
- rules :
  - explicit requirements:
    - return true if the input string is a palindrome
      - A palindrome string reads the same forwards and backwards.
    - case matters: 'dad' is palindrome but 'Dad' is not.
    - all characters in the given string matters, even if a part of the string is palindrome  
  - implicit requirements:
    - what will be returned if the string is empty, an error or true?
      - I assume empty string will return true.
    - There may be numbers or punctuation in the input string

2. Examples / Test Cases:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

3. Data Structure:
- mental model:
  - 'madam' -> true
  - compare the input string with its reversed version and if they are same return true, otherwise return false.
  - how to reverse a string:
    - rebuild it reading from the last character until the first
- I don't need a particular data structure    

4. Algorithm:
- declare `strReversed` variable and initialize it to ''
- iterate through the input string starting from the last character
  - concat the current char to `strReversed`
- return the result of comparing input string with `strReversed`  

*/

function isPalindrome(str) {
  let reversedStr = '';
  let index = str.length - 1;

  while (index >= 0) {
    reversedStr += str.charAt(index);
    index -= 1;
  }

  return str === reversedStr;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
console.log(isPalindrome(''));                    // true
