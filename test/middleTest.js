const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


// describe("#middle", () => {
//   it("returns [5] for [1,2,3,4,5,6,7,8,9]", () => {
//     assert.eql(middle([1,2,3,4,5,6,7,8,9]), [5]);
//   });

//   it("returns [ 7, 8 ] for [1,2,3,4,5,6,7,8,9,10,11,12,13,14]", () => {
//     assert.eql(middle([1,2,3,4,5,6,7,8,9,10,11,12,13,14]), [ 7, 8 ]);
//   });

// });

test code
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9]), [5]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8,9,10,11,12,13,14]), [ 7, 8 ]);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([]), []);