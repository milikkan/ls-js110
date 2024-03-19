/* 
Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

*/

function isAlphabetic(char) {
  return char.toLowerCase <= 'z' && char.toLowerCase() >= 'a';
}

function isLowerCase(char) {
  return isAlphabetic(char) && char.toLowerCase() === char;
}

function isUpperCase(char) {
  return isAlphabetic(char) && char.toUpperCase() === char;
}

function letterCaseCount(str) {
  let lowerCaseCount = 0;
  let upperCaseCount = 0;
  let neitherCount = 0;

  [...str].forEach(char => {
    if (isLowerCase(char)) {
      lowerCaseCount += 1;
    } else if (isUpperCase(char)) {
      upperCaseCount += 1;
    } else {
      neitherCount += 1;
    }
  });
  return {lowercase: lowerCaseCount, uppercase: upperCaseCount, neither: neitherCount};
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }