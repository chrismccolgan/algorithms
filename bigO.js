/* 
  Suppose we want to write a function that 
  calculates the sum of all numbers from 1 
  up to (and including) some number n. 
*/

// Number of operations is bounded by a multiple of n, O(n)
const addUpToFirst = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

// Always 3 operations, O(1)
const addUpToSecond = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(addUpToFirst(10));
console.log(addUpToSecond(10));

// Number of operations is bounded by a multiple of n, O(n)
const countUpAndDown = (n) => {
  console.log('Going up!');
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top!\nGoing down...');
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down. Bye!');
};

// O(n) operation inside of an O(n) operation, O(n^2)
const printAllPairs = (n) => {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};
