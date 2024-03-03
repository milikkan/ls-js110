let result = [[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === "number") {
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});

console.log(result); // [[27], ['apple']]