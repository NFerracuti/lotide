const eqObjects = require('./eqObjects');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

module.exports = assertObjectsEqual;

// // tester code not being used
// console.log(assertObjectsEqual({1: 'a', 2: 'b', 3: 'c'}, {1: 'a', 2: 'b', 3: 'c'}));
// console.log(assertObjectsEqual({1: 'a', 2: 'b', 3: 'c'}, {1: 'a', 2: 'b', 3: 'd'}));