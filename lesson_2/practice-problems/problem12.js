// Create a deep copy of the following nested array.

const arr = [
  ['b', 'c', 'a'],
  ['blue', 'black', 'green'],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

const arrDeepCopied = JSON.parse(JSON.stringify(arr));

console.log('original array', arr);
console.log('deep copied array', arrDeepCopied);

// mutate the original array
arr.push(42);
arr[1].push('red');

console.log('mutated original array', arr);
console.log('deep copied array', arrDeepCopied);