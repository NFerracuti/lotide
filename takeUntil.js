const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(arr, callback) {
  result = [];
  for (let i = 0; i <= arr.length; i++) {
    if (!callback(arr[i])) {
      result.push(arr[i]);
    } else {
      break;
    }
  } 
  return result;
};

module.exports = takeUntil;


// // tester code (not being used)
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');

// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

// assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);