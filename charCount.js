/*
  Write a function which takes in a string and
  returns counts of each character in the string
*/

function charCount(str) {
  // make object to return at end
  const obj = {};
  // loop over string, for each character...
  for (let char of str) {
    // convert char to lowercase and check if it's either a letter or number
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      // if the char is a number/letter AND is a key in object, add one to count
      if (obj[char]) {
        obj[char]++;
        // if the char is not in object, add it and set value to 1
      } else {
        obj[char] = 1;
      }
    }
  }
  console.log(obj);
  // return object
  return obj;
}

const charCount2 = (str) => {
  const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char]++ || (obj[char] = 1);
    }
  }
  console.log(obj);
  return obj;
};

charCount('This is a test!!!');
charCount2('This is a test!!!');
