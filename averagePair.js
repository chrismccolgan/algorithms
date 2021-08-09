/*
  Write a function called averagePair. Given a sorted array of integers 
  and a target average, determine if there is a pair of values in the array 
  where the average of the pair equal the target average, there may be more
  than one pair that matches the average target
*/

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  if (arr.length === 0) return false;

  while (left != right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg > target) {
      right--;
    } else if (avg < target) {
      left++;
    } else return true;
  }
  return false;
}

averagePair([1, 2, 3], 2); // true
