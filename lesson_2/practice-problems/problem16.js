// Given the following data structure write some code to return an array containing
// the colors of the fruits and the sizes of the vegetables.
// The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let result = Object.values(obj).map(currentObj => {
  if (currentObj.type === 'fruit') {
    return currentObj.colors.map(str => capitalize(str));
  } else {
    return currentObj.size.toUpperCase();
  }
});

console.log(result);