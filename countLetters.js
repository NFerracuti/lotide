const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {

  let result = {};

  for (const letters of string) {
  
    if (result[letters]) {

      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  console.log(result);
};

const result = countLetters('hello');

let helloKeys = Object.keys(result);

for (let key of helloKeys) {
  assertEqual((result[key]), countLetters('hello')[key]);
}


countLetters('hello');