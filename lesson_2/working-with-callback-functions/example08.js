let result = [[[1], [2], [3]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      console.log(element3.length);
      return element3.length > 0;
    });
  });
});

console.log(result); // [undefined, undefined]