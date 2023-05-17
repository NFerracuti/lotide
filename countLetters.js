const countLetters = function(string) {

  let result = {};

  for (const letters of string) {
  
    if (result[letters]) {

      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  return result;
};

module.exports = countLetters;