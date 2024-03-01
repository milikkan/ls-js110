// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let result = Object.values(ages).reduce((acc, age) => (age < acc) ? age : acc);
console.log(result);

// second way
console.log(Math.min(...Object.values(ages)));