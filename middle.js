const middle = function(arr) {

  let output = [];

  if (arr.length <= 2) {
    return output;

  } else if (arr.length % 2 === 0) {

    for (let i = (arr.length / 2) - 1; i < ((arr.length / 2) + 1); i++) {
      output.push(arr[i]);
    }

  } else if (arr.length % 2 === 1) {
    for (let i = ((Math.floor(arr.length / 2))); i < ((arr.length / 2)); i++) {
      output.push(arr[i]);
    }
  }
  return output;
};

module.exports = middle;