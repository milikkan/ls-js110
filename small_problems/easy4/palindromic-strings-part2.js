/* 
1. Understanding the Problem:
- input : a string
- output: boolean
- rules :
  - explicit requirements:
    - return true if the input string is a palindrome
      - A palindrome string reads the same forwards and backwards.
    - case does not matter, 'Madam' is a palindrome
    - ignore all non-alphanumeric characters (characters other than numbers and letter)   
  - implicit requirements:
    - I assume empty string will return true
    
2. Examples / Test Cases:

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

3. Data Structure:
- mental model:
  - eliminate all non-alphanumeric characters and check if the lowercase version of input string is a palindrome
  - I need to construct a new string
  - I can convert the input string to an array and after cleaning the unwanted characters, I can convert it back to a string
- I will use an array as data structure        

4. Algorithm:
- declare a variable `strArray`
- convert lowercase version of input string to an array of characters and assign this array to `strArray`
- declare a variable `alphaNumArr` and assign `[]` to it
- iterate through `strArr` array
  - if the character at current index is alphanumeric, push it to `alphaNumArr`
- convert characters in the `alphaNumArr` to a string
- check if new string is a palindrome using the isPalindrome function

function isAlphaNumeric
- if character is greater than or equals to 'a' and less than or equals to 'z'
  - or if character is greater than or equals to '0' and less than or equals to '9'
- return true, otherwise false  
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

function isAlphaNumeric(char) {
  return char >= 'a' && char <= 'z' ||
    char >= '0' && char <= '9';
}

function isRealPalindrome(str) {
  let strArray = str.toLowerCase().split('');
  let alphaNumArr = strArray.filter(char => isAlphaNumeric(char));
  return isPalindrome(alphaNumArr.join(''));
}

console.log(isRealPalindrome(''));                    // true
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false