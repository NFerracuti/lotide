const assert = require('chai').assert;
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);

const f = ["x", "k", "t"];

tail(f);
describe("#tail", () => {
  it("returns 3 for f.length", () => {
    assert.strictEqual((f.length), 3);
  });

  it("returns 2 for result.length", () => {
    assert.strictEqual((result.length), 2);
  });

  it("returns 'Lighthouse' for result[0]", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("returns 'Labs' for result[1]", () => {
    assert.strictEqual(result[1], "Labs");
  });

  it("returns [ 2, 3, 4, 5 ] for [1, 2, 3, 4, 5] ", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [ 2, 3, 4, 5 ]);
  });

  it("returns [ 'how', 'are', 'you' ] for [ 'hello', 'how', 'are', 'you' ] ", () => {
    assert.deepEqual(tail([ 'hello', 'how', 'are', 'you' ]), [ 'how', 'are', 'you' ]);
  });
});