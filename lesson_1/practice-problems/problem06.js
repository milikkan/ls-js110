// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
let result = arr.fill(1, 1, 5);

console.log(result);
console.log(arr);

// fill method fills the elements starting from index 1 until the element index 5 with the value 1.
// it is a destructive method. We can always check the documentation on MDN.