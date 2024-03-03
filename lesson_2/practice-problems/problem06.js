// Given this previously seen family object, print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Each output line should follow this pattern:
// (Name) is a (age)-year-old (male or female).

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

Object.entries(munsters).forEach(munster => {
  console.log(`${capitalize(munster[0])} is a ${munster[1].age}-year-old ${munster[1].gender}.`);
});
