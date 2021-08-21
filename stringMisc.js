// Repeat String:
function repeatString(string, times) {
  if (times > 0) {
    return string.repeat(times);
  } else {
    return '';
  }
}
repeatString('abc', 3);

// Reverse String:
function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString('hello');

// Longest Word:
function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0].length;
}
findLongestWord('The quick brown fox jumped over the lazy dog');
