/* 
The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.

1.
- i: a number (negative, 0, or positive)
- o: a string
- r/e:
  - if the number is positive, time is after midnight
  - if the number is zero, time is "00:00"
  - if the number is negative, time is before midnight
  - return the time in 24 hour format: "hh:mm"
2.
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

3. None

4.
- high-level:
  - calculate the number of minutes in 24 hours
  - apply input time to the total minutes
  - convert result to hours and minutes and format as a string
- step-by-step
  - declare a `totalMinutes` variable and assign `24 * 60` to it
  - declare `calculatedMinutes` variable and assign the result of adding `time` parameter to `totalMinutes` to it
  - declare a `hours` variable and assign the remainder after dividing `calculatedMinutes / 60` by `24` to it
  - declare a `minutes` variable and assign `calculatedMinutes % 60` to it
  - return the result in format "hh:mm" (pad hours and minutes with `0`s and format them as 2 digits)
*/

function timeOfDay(time) {
  const totalMinutes = 24 * 60;
  const calculatedMinutes = totalMinutes + time;
  let hours = Math.floor(calculatedMinutes / 60) % 24;
  hours = (hours + 24) % 24;
  let minutes = (calculatedMinutes - hours * 60) % 60;
  if (minutes < 0) minutes = 60 + minutes;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, 0)}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");