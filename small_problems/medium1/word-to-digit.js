/* 
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

*/

function isLetter(char) {
  return char.toLowerCase() <= 'z' && char.toLowerCase() >= 'a';
}

function stripWord(word) {
  let startLetterPos = 0;
  while (!isLetter(word.charAt(startLetterPos))) {
    startLetterPos++;
  }
  word = word.slice(startLetterPos);

  let endLetterPos = word.length - 1;
  while (!isLetter(word.charAt(endLetterPos))) {
    endLetterPos--;
  }
  return word.slice(0, endLetterPos + 1);
}


function wordToDigit(str) {
  let words = str.split(' ');
  let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  return words.map(word => {
    if (digits.includes(stripWord(word))) {
      let wordDigit = digits.indexOf(stripWord(word));
      if (word !== stripWord(word)) wordDigit = word.replace(stripWord(word), wordDigit);
      return wordDigit;
    } else {
      return word;
    }
  }).join(' ');
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));
console.log(wordToDigit('Hello, call five, okay five!!'));
console.log(wordToDigit('-five, I said, not four!'));