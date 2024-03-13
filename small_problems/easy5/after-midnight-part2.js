/* 
Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.

1.
- i: a string
- o: a non-negative number
- r/e:
  - return value should be between 0 and 1439 (there are 1440 minutes in 24 hours)
- r/i:
  - if the hour is 24, it is same as 0

  2. given below

3. none

4.
- high-level:
  - split string into two parts, convert hours and minutes to numbers
  - afterMidnight: return "hours * 60 + minutes"
  - beforeMidnight: return 1440 - (hours * 60 + minutes)

*/

const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;

function afterMidnight(hour24) {
  let hourAndMinute = hour24.split(':');
  let hour = Number(hourAndMinute[0]) % HOURS_IN_DAY;
  let minute = Number(hourAndMinute[1]);
  return hour * MINUTES_IN_HOUR + minute;
}

function beforeMidnight(hour24) {
  return (MINUTES_IN_DAY - afterMidnight(hour24)) % MINUTES_IN_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);