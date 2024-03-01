// What is the return value of map in the following code? Why?

let result = [1, 2, 3].map(num => {
  num * num;
});

console.log(result);

// it returns [undefined, undefined, undefined]
// map method returns a new array containing the return values for each iteration of the callback function.
// Since the arrow function is used with curly braces, we need to include an explicit return statement.
// Otherwise, callback function returns undefined for every iteration.