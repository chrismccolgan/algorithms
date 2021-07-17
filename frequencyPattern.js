/* 
  FREQUENCY COUNTERS
  
  This pattern uses objects or sets to collect
  values/frequency of values.
  
  This can often avoid the need for nested loops
  or O(N^2) operations with arrays/strings.
*/

/* 
  Write a function called same, which accepts two arrays.
  The function should return true if every value in the
  array has its corresponding value squared in the second
  array. The frequency of values must be the same.

  same([1,2,3], [4,1,9]) // true
  same([1,2,3], [1,9]) // false
  same([1,2,1], [4,4,1]) // false 
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

function sameBetter(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

/* 
  Given two strings, write a function to determine if 
  the second string is an anagram of the first.

  validAnagram('', '') // true
  validAnagram('car', 'rat') // false
  validAnagram('anagram', 'nagaram') // true
  validAnagram('awesome', 'awesom') // false
*/

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let letter of first) {
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  // for (let i = 0; i < second.length; i++) {
  // let letter = second[i];

  for (let letter of second) {
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('car', 'rat')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('awesome', 'awesom')); // false
