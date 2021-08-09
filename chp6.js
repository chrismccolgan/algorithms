/* 
  Frequency Counter - sameFrequency
  Write a function called sameFrequency. Given two positive integers,
  find out if the two numbers have the same frequency of digits.
*/

function sameFrequency(a, b) {
  let str1 = a.toString();
  let str2 = b.toString();

  if (str1.length !== str2.length) {
    return false;
  }

  let testObj = new Set([...str1]);
  let obj = {};

  console.log(testObj);

  // sameFrequency(182,281)
  // obj = {1:1, 8:1, 2:1}

  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = (obj[str1[i]] || 0) + 1;
  }

  for (let val of str2) {
    if (obj[val]) {
      obj[val]--;
    } else {
      return false;
    }
  }

  // for (let i = 0; i < str1.length; i++) {
  //   if (obj[str1[i]]) {
  //     obj[str1[i]]++;
  //   } else {
  //     obj[str1[i]] = 1;
  //   }
  // }

  // for (let j = 0; j < str2.length; j++) {
  //   if (obj[str2[j]]) {
  //     obj[str2[j]]--;
  //   } else {
  //     return false;
  //   }
  // }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(1234282, 281)); // false
console.log(sameFrequency(1822814, 2814281)); // true
console.log(sameFrequency(18242, 14281)); // false

// Multiple Pointers - countUniqueValues
function countUniqueValues(array) {
  if (array.length === 0) {
    return 0;
  }

  const newObj = {};

  for (let i = 0; i < array.length; i++) {
    if (newObj[array[i]]) {
      newObj[array[i]]++;
    } else {
      newObj[array[i]] = 1;
    }
  }

  return Object.keys(newObj).length;
}

console.log(countUniqueValues([1, 1, 2, 3])); // 3
