/* 
Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

1.
- i: a number
- o: an array of numbers
- r/e:
  - input is a positive integer (not `0` or negative)
  - return an array that has each digit as its elements
r/i:  
  - digits will be number, not string

  2.
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

3. array

4.
- declare a function that has one parameter (`num`)
- declare variable `digits` and assign it the digits array
  - convert `num` to string and split each character of string and retutn it as an array
- iterate through `digits` and convert each element to number type
*/

function digitList(num) {
  let digits = String(num).split('');
  return digits.map(element => Number(element));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]