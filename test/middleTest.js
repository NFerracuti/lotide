const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [5] for [1,2,3,4,5,6,7,8,9]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9]), [5]);
  });

  it("returns [ 7, 8 ] for [1,2,3,4,5,6,7,8,9,10,11,12,13,14]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9,10,11,12,13,14]), [ 7, 8 ]);
  });

  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("returns [], []", () => {
    assert.deepEqual(middle([]), []);
  });
});