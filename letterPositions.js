const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {

  let result = {};

  for (let i = 0; i < sentence.length; i++) {

    const letter = sentence[i]

    if (result[letter] && letter !== ' ') {
      result[letter].push(i);

    } else if (letter !== ' ') {
        result[letter] = [i];
    }
  }
  return result;
};

module.exports = letterPositions;


// // testing code not being used
// const result = letterPositions("lighthouse in the house");

// assertArraysEqual(result['h'], [ 3, 5, 15, 18 ]);
// assertArraysEqual(result['t'], [ 4, 14 ]);
// assertArraysEqual(result['l'], [0]);

