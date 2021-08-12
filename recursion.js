function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// function countDown(num) {
//   for (var i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log('All done!');
// }

countDown(3);

function sumRange(num) {
  if (num === 1) return 1; // base case
  return num + sumRange(num - 1);
}

console.log(sumRange(3)); // 6

/* 
  sumRange(3)
  return 3 + sumRange(2)
             return 2 + sumRange(1)
                        return 1

  3 + 3 = 6
*/

// Writing factorial iteratively
function factorialI(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// Writing factorial recursively
function factorialR(num) {
  if (num === 1) return 1;
  return num * factorialI(num - 1);
}

console.log(factorialI(5)); // 120
console.log(factorialR(5)); // 120

// Helper method recursion

function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Pure recursion
function collectOddValues2(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // newArr = [...newArr, ...collectOddValues2(arr.slice(1))];
  newArr = newArr.concat(collectOddValues2(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues2([1, 2, 3, 4, 5]));

/*
collectOddValues([1,2,3,4,5])
[1].concat(collectOddValues[2,3,4,5])
          [].concat(collectOddValues[3,4,5])
                    [3].concat(collectOddValues[4,5])
                              [].concat(collectOddValues[5])
                                       [5].concat(collectOddValues[])
                                                 []
*/
