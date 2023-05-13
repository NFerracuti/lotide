const assertEqual = require('./assertEqual');

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

module.exports = countLetters;

//testing code not being used
// const result = countLetters('hello');

// let helloKeys = Object.keys(result);

// for (let key of helloKeys) {
//   assertEqual((result[key]), countLetters('hello')[key]);
// }

