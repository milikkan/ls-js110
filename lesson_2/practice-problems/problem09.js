// Given the following data structure, return a new array with the same structure,
// but with the values in each subarray ordered
// alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let result = arr.map(subArr => {
  let copyArr = subArr.slice();
  if (typeof copyArr[0] === 'string') {
    return copyArr.sort();  
  } else {
    return copyArr.sort((a, b) => a - b);
  }
});

console.log(result);
console.log(arr);