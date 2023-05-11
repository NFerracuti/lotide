const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//test code
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]), [5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10,11,12,13,14]), [ 7, 8 ]);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([]), []);