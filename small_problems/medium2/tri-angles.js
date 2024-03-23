/* 
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

P:
- i: 3 numbers
- o: a string
- r/e:
  - the sum of all angles must be 180, or return 'invalid'
  - if any of the angles is not greater than 0, return 'invalid'
  - if one angle is 90, return 'right'
  - if all angles are less than 90, return 'acute'
  - if one angle is greater than 90, return 'obtuse'
  - all angles are integer values

A:
- high-level:
  - determine if the triangle is 'invalid'. If it is valid, determine 3 remaining situations.
- step-by-step:
  - declare a variable 'angles' and assign to arguments array
  - if any angle is not greater than 0, return 'invalid'
  - if the sum is not 180, return 'invalid'
  - determine other conditions
*/

function triangle(angle1, angle2, angle3) {
  let angles = [...arguments];
  if (angles.some(angle => angle <= 0)) return 'invalid';
  if (angles.reduce((sum, angle) => sum + angle, 0) !== 180) return 'invalid';

  if (angles.every(angle => angle < 90)) {
    return 'acute';
  } else if (angles.some(angle => angle === 90)) {
    return 'right';
  } else {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"