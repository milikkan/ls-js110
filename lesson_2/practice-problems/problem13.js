// Similar to the previous question, you need to create a deep copy of the following nested object.

const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

// we cannot use JSON stringfy and parse methods to deep copy this object. Because:
// - JSON does not recognize undefined as a valid JSON value and converts it to null
// - JSON treats NaN as null.
// Thus, we need to create a deep copy manually.

// const objCopy = {
//   falsy: truthiness.falsy.slice(),
//   truthy: truthiness.truthy.slice()
// };

// another solution using for-in
const objCopy = {};

for (let prop in truthiness) {
  objCopy[prop] = [...truthiness[prop]];
}

console.log('original object', truthiness);
console.log('deep copied object', objCopy);

// mutate the deep copied object
objCopy.falsy.push('hello...');

console.log('original object after mutation', truthiness);
console.log('deep copied object after mutation', objCopy);