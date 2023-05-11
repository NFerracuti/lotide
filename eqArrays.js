const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {

    return false;
  }
    for (let i = 0; i < arr1.length; i++) {

      if (arr2[i] !== arr1[i]) {

        return false;
    }
  }
  return true;
};

module.exports = eqArrays;