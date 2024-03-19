/* 
Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

*/

function swapCase(str) {
  return [...str].map(char => {
    if (char.toLowerCase() === char) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(swapCase('CamelCase') === "cAMELcASE");                  // true
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv");  // true