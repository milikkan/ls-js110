// What is the return value of map in the following code? Why?

let result = ['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

console.log(result);

// return value is [undefined, 'bear']
// map replaces each element with the return value of the callback function.
// When the element is not greater than 3, because no explicit return statement is
// provided, map will return undefined for the element 'ant'.