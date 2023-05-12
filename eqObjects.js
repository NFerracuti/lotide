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
    // if they are not arrays, check that they are the same. if not: false
    } else {
      if(object1[i] !== object2[i]) {
        return false;
      }
    }
  }
  return true;
};


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false


// const testObj1 = {a: '1', b: '2', c: []};
// const testObj2 = {a: '1', b: '2', c: '3'};
// assertEqual(eqObjects(testObj1, testObj2), false);

module.exports = eqObjects;