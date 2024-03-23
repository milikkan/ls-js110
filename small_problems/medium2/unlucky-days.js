/* 
Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

P:
- i: a number
- o: a number
- r/e:
  - return the number of Fridays that are also the 13th of that month

A:
- declare a const FRIDAY_INDEX and set to 5
- declare a `count` variable and init to 0
- iterate from 0 to 11
  - construct a Date with `year`, current loop index and 13
  - check if the getDay returns 'FRIDAY_INDEX` and increment count if so
- return `count`
*/

function fridayThe13ths(year) {
  const FRIDAY_INDEX = 5;
  let count = 0;
  for (let monthIndex = 0; monthIndex <= 11; monthIndex++) {
    let date = new Date(year, monthIndex, 13);
    if (date.getDay() === FRIDAY_INDEX) {
      count++;
    }
  }
  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2