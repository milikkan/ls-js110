/* 
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

1.
- i: a number (can be floation point)
- o: a string
- r/e:
  - convert floating point angle value to its string representation
  - angle is a number between 0 and 360
  - output format is: degrees-minutes-seconds
  - a degree is 60 minutes and a minute is 60 seconds
- r/i: none

2.
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

3. none

4. 
- high-level:
  - 76.73 -> 76˚ + (60 * 0.73)' -> 76˚ 43' + (60 * 0.8) = 76˚43'48"
  - the whole part (left side of the point) of the input will be the degrees, fraction part will become the minutes
  - the whole part of minutes will be minutes and fractional part will become the seconds
- step-by-step
  - declare a variable `degrees` and assign the whole part
  - declare a variable `minutes` and assign it the whole part of `(angle - degrees) * 60`
  - declare a variable `seconds` and assign it `(degrees - minutes) * 60`
  - return the propertly formatted string (`degrees˚minutes'seconds"`)

*/

function dms(angle) {
  let degrees = Math.trunc(angle);
  let minutes = (angle - degrees) * 60;
  let seconds = (minutes - Math.trunc(minutes)) * 60;

  let minutesStr = String(Math.trunc(minutes)).padStart(2, '0');
  let secondsStr = String(Math.trunc(seconds)).padStart(2, '0');

  return `${degrees}˚${minutesStr}'${secondsStr}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

// TODO: solve further exploration