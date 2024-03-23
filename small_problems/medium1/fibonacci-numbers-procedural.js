function fibonacci(n) {
  if (n <= 2) return 1;
  let count = 2;
  let next;
  let first = 1;
  let second = 1;
  do {
    next = first + second;
    count++;
    first = second;
    second = next;
  } while (count < n);
  return next;
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050