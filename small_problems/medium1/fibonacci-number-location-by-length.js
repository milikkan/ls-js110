/* 
Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

P:
- i: a number
- o: a number
- r/e:
  - input will specify a fibonacci number that has this length of digits
  - return the index of that fib number
  - first fib num has index 1, not 0
  - input is always an integer greater than or equal to 2

D: None

A:
- high-level:
  - starting from the first fib number, continue calculating the next fib number and keep count of numbers. If next fib number has the desired number of digits, return count.

- step-by-step:
  - declare a `count` var and init to `1`
  - start a loop that starts from `count`
    - calculate next fib number
    - if number has the desired number of digits, break
    - increment `count`
  - return `count`

*/

function findFibonacciIndexByLength(digitSize) {

  let count = 3n;
  firstFib = 1n;
  secondFib = 2n;
  let nextFib = firstFib + secondFib;
  
  while (String(nextFib).length < digitSize) {
    nextFib = firstFib + secondFib;
    count += 1n;

    if (String(nextFib).length >= digitSize) break;

    firstFib = secondFib;
    secondFib = nextFib;
  }

  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.