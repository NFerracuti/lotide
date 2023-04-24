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

//testcode
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual(['1','2','3',], ['1','2','3','4']);
assertArraysEqual([1,2,'3'], [1,2,3]);
assertArraysEqual(['1','2','3','4'], ['1','2','3','4']);