let result = [[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') {
      return elem + 1;
    } else {
      return elem.map(number => number + 1);
    }
  });
});

console.log(result); // [[[2, 3], [4, 5]], [6, 7]]