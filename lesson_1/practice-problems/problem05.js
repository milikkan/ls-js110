// What is the callback's return value in the following code? Also, what is the return value of every in this code?

let result = [1, 2, 3].every(num => {
  return num = num * 2;
});

console.log(result);

// callback's return values are 2, 4 and 6
// return value of every is true