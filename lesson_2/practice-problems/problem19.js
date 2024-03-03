//  For this problem, you are tasked with creating a deep copy of the munsters object,
// whose nested objects cannot be altered.

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let copy = JSON.parse(
  JSON.stringify(munsters),
  (munster, info) => Object.freeze(info)
);

console.log(copy);

// mutate original
munsters.herman.age = 999;
console.log(munsters);
console.log(copy);

// we cannot mutate copy, because it is frozen
copy.herman.age = 999; // fails silently
console.log(copy);

// TODO: research JSON.parse usage with a callback, does the original object also frozen?