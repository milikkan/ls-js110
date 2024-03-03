// Given the following data structure, write some code that defines an object
// where the key is the first item in each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let result = {};

// arr.forEach(subArr => {
//   let key = subArr[0];
//   let value = subArr[1];
//   result[key] = value;
// });

// another solution using Object.fromEntries method
result = Object.fromEntries(arr);

console.log(result);

