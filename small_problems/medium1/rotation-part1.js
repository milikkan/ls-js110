/* 
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

P:
- i: an array
- o: a new array
- r/e:
  - move the first item to the end of the array
  - do not modify input, return a new array
  - if input is empty array, return empty array
  - if inpur is not array, return undefined
- r/i:
  - what happens if there are reference types in the array
    - I need to deep clone the input array

D: array

A:
- if input is not array, return undefined (guard clause)
- if input is empty array, return empty array (guard clause)
- deep clone the inpu array
- take the first item and push to the deep cloned array
- return the deep cloned array
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let deepClone = JSON.parse(JSON.stringify(arr));
  deepClone.push(deepClone.shift());

  return deepClone;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []


// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

let testArr = [{ a: 2 }, [1, 2], 3];
let rotatedTestArr = rotateArray(testArr);

console.log(testArr); // [ { a: 2 }, [ 1, 2 ], 3 ]
console.log('rotatedTestArr', rotatedTestArr); // [ [ 1, 2 ], 3, { a: 2 } ]

testArr[0].a = 3;

console.log('testArr after modification', testArr); [ { a: 3 }, [ 1, 2 ], 3 ]
console.log('rotatedTestArr after modification', rotatedTestArr); // [ [ 1, 2 ], 3, { a: 3 } ]

