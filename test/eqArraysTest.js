const assert = require('chai').assert;
eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  it("returns true for [1,2,3], [1,2,3]", () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2,3]), true);
  });

  it("returns true for ['1','2','3',], ['1','2','3','4']", () => {
    assert.strictEqual(eqArrays(['1','2','3',], ['1','2','3','4']), false);
  });

  it("returns false for [1,2,'3'], [1,2,3]", () => {
    assert.strictEqual(eqArrays([1,2,'3'], [1,2,3]), false);
  });

  it("returns false for ['1','2','3','4'], ['1','2','3','4']", () => {
    assert.strictEqual(eqArrays(['1','2','3','4'], ['1','2','3','4']), true);
  });
});
