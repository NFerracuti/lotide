const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const without = function(source, itemsToRemove) {

  let source2 = source.slice(0);
  for (let i = 0; i < source.length; i++) {

    for (let x = 0; x < itemsToRemove.length; x++) {

      if (itemsToRemove[x] === source[i]) {

        source2.splice(i, 1);
      }
    }
  }
  return source2;
};

module.exports = without;


// tester code (not being used)
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);