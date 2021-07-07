/* 
  Suppose we want to write a function that 
  calculates the sum of all numbers from 1 
  up to (and including) some number n. 
*/

const addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

const addUpToTwo = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(addUpTo(10));
console.log(addUpToTwo(10));
