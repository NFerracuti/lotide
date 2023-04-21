const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//test code
assertEqual("Bingo Bongo", "Hello");
assertEqual(1, 1);
assertEqual('nick', 'nick');
assertEqual(1, 4);