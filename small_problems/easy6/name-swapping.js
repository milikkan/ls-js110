/* 
Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

*/

// function swapName(fullName) {
//   let names = fullName.split(' ');
//   return `${names[1]}, ${names[0]}`;
// }

// better solution
// function swapName(fullName) {
//   return fullName.split(' ').reverse().join(', ');
// }

// consider middle names
function swapName(fullName) {
  let names = fullName.split(' ');
  return `${names.slice(-1).join('')}, ${names.slice(0, names.length - 1).join(' ')}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"