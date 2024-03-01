// What is the return value of the filter method call below? Why?

let result = [1, 2, 3].filter(num => 'hi');
console.log(result);

// return value is [1, 2, 3]
// Because filter selects an elements for which the callback function returns a truthy value.
// Since the callback function returns 'Hi' for each iteration, and 'Hi' is truty, filter
// selects all the elements of the calling array and returns a new array containing the same elements.
