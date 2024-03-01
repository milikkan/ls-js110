// What is the return value of the following statement? Why?

let result = ['ant', 'bear', 'caterpillar'].pop().length;
console.log(result);

// it returns 11
// pop method returns the last element from the array and mutates the calling array.
// Since we are calling length on the return value, 'caterpillar' has length of 11.