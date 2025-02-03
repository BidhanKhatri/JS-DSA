// Fibonacci Series is a series of numbers in which each number is the sum of the two preceding numbers.
// The series starts with 0 and 1.
// Formula for nth Fibonacci number is F(n) = F(n-1) + F(n-2).

const fibonacci = (n) => {
  const arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
};

console.log(fibonacci(5));
