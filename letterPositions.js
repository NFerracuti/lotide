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
