const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;

//testcode
// assertArraysEqual([1,2,3], [1,2,3]);
// assertArraysEqual(['1','2','3',], ['1','2','3','4']);
// assertArraysEqual([1,2,'3'], [1,2,3]);
// assertArraysEqual(['1','2','3','4'], ['1','2','3','4']);