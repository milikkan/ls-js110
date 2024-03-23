/* 
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

P:
- i: 3 numbers
- o: a string
- r/e:
  - sum of two shortest sides must be greater than the longest side
  - every side must be greater than 0
  - if valid and 3 sides are equal return 'equilateral'
  - if valid and 2 sides are equal return 'isosceles'
  - if valid and 3 sides are different return 'scalene'

D: Array to sort side lengths

A:
- high-level:
  - find longest side and determine if the triangle is valid
  - if valid determine other 3 remainin situations
- step-by-step:
  - declare a `sides` variable and assign args array
  - if any value is 0 return 'invalid'
  - sort ascending
  - declare a variable `longest` and assign the last element of `sides` array
  - if the sum of remainin two are not greater than `longest` return `invalid`
  
  - iterate through the `sides` array
    - if all values are same return ...
    - if two values are same return ..
    - else return ..
*/

function triangle(side1, side2, side3) {
  let sides = [...arguments];
  if (sides.some(side => side === 0)) return 'invalid';
  sides.sort((a, b) => a - b);
  let twoSides = sides.slice();
  let longest = twoSides.pop();
  if ((twoSides[0] + twoSides[1]) <= longest) return 'invalid';

  let isAllSidesEqual = twoSides.every(side => side === longest);
  let isAllSidesDifferrent =twoSides.every(side => side !== longest);

  if (isAllSidesEqual) {
    return 'equilateral';
  } else if (isAllSidesDifferrent) {
    return 'scalene';
  } else {
    return 'isosceles';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"