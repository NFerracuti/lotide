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


const letterPositions = function(sentence) {

  let result = {};

  for (let i = 0; i < sentence.length; i++) {

    const letter = sentence[i]

    if (result[letter] && letter !== ' ') {
      result[letter].push(i);

    } else if (letter !== ' ') {
        result[letter] = [i];
    }
  }
  return result;
};

// const result = letterPositions("lighthouse in the house");

// assertArraysEqual(result['h'], [ 3, 5, 15, 18 ]);
// assertArraysEqual(result['t'], [ 4, 14 ]);
// assertArraysEqual(result['l'], [0]);

module.exports = letterPositions;