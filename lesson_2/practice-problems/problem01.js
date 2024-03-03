// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

// this works, because subtraction operator implicitly coerces strings into numbers.
// but it is good to be explicit than implicit, so use Number function.
// arr.sort((a, b) => b - a);

arr.sort((a, b) => Number(b) - Number(a));
console.log(arr);