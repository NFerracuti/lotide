const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {

  if (actual.length !== expected.length) {
    return false;
  }
    for (let i = 0; i < actual.length; i++) {

      if (expected[i] !== actual[i]) {
        return false;
    }
  }
  return true;
};


const flatten = function(arr) {

  let output = [];
  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {

      for (let x = 0; x < arr[i].length; x++) {

        output.push(arr[i][x]);
      }

    } else {

      output.push(arr[i]);
    }
  }
  return output;
};

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;