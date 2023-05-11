
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

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(arr) {

  let output = [];

  //for arrays too short to have a middle
  if (arr.length <= 2) {
    return output;

  //for even arrays
  } else if (arr.length % 2 === 0) {

    for (let i = (arr.length / 2) - 1; i < ((arr.length / 2) + 1); i++) {
      output.push(arr[i]);
    }

  // for odd arrays
  } else if (arr.length % 2 === 1) {
    for (let i = ((Math.floor(arr.length / 2))); i < ((arr.length / 2)); i++) {
      output.push(arr[i]);
    }
  }
  return output;
};

module.exports = middle;