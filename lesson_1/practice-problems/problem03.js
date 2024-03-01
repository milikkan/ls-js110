// What is the return value of map in this case? Why?

let result = [1, 2, 3].map(num => num * num);
console.log(result);

// it returns [1, 4, 9]
// map replaces each element with the return value of the callback function for that element.