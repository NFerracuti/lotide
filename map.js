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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];

    for (let item of array) {
      results.push(callback(item));
    }
  return results;
};

// const results1 = map(words, word => word[0]);

// const results2 = map(words, word => word.length);

// const agesArr = [45, 23, 77, 65, 18, 5, 82, 91];

// const seniors = map(agesArr, age => (age >= 60 ? age : undefined)).filter(age => age !== undefined);;

// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

// assertArraysEqual(results2, [6, 7, 2, 5, 3]);

// assertArraysEqual(seniors, [77, 65, 82, 91]);

module.exports = map;