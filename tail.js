const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const tail = function(x) {

  let output = [];
  for (let i = 1; i < x.length; i++) {
    output.push(x[i]);

  }
  return output;
};

module.exports = tail;
