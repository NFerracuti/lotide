const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const flatten = function(arr) {

  let output = [];
  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {

      for (let x = 0; x < arr[i].length; x++) {

        output.push(arr[i][x]);
      }

    } else {

      output.push(arr[i]);
    }
  }
  return output;
};

module.exports = flatten;

// testing code not being used
// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]