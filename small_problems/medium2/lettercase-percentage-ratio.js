/* 
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.
*/

function isAlphabetic(char) {
  char = char.toLowerCase();
  return char <= 'z' && char >= 'a';
}

function isUpperCase(char) {
  return isAlphabetic(char) && char.toUpperCase() === char;
}

function isLowerCase(char) {
  return isAlphabetic(char) && !isUpperCase(char);
}

function letterPercentages(str) {
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let otherCount = 0;

  function calculatePercentage(value) {
    return (value * 100 / str.length).toFixed(2)
  }

  [...str].forEach(char => {
    if (isUpperCase(char)) {
      uppercaseCount += 1;
    } else if (isLowerCase(char)) {
      lowercaseCount += 1;
    } else {
      otherCount += 1;
    }
  });

  return {
    lowercase: calculatePercentage(lowercaseCount),
    uppercase: calculatePercentage(uppercaseCount),
    neither: calculatePercentage(otherCount),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }