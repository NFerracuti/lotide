const assertEqual = function(actual, expected) {

  if (actual === expected) {
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

//test code
assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays(['1','2','3',], ['1','2','3','4']), false);
assertEqual(eqArrays([1,2,'3'], [1,2,3]), false);
assertEqual(eqArrays(['1','2','3','4'], ['1','2','3','4']), true);