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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  //first check if the objects are the same length. if not: false
  if (object1Keys.length !== object2Keys.length) {
  return false;
  }

  //next, check that the type of the values are the same. if not: false

  //next, if the values are arrays, check that the arrays are the same. if not: false
  for (let i in object1) {
    if (Array.isArray(object1[i])) {
      if(!eqArrays(object1[i], object2[i])) {
        return false;
      }
    } else {
      if(object1[i] !== object2[i]) {
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

// console.log(assertObjectsEqual({1: 'a', 2: 'b', 3: 'c'}, {1: 'a', 2: 'b', 3: 'c'}));

// console.log(assertObjectsEqual({1: 'a', 2: 'b', 3: 'c'}, {1: 'a', 2: 'b', 3: 'd'}));

module.exports = assertObjectsEqual;
