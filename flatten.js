const flatten = function(arr) {

  let output = [];
  
  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {

      for (let x = 0; x < arr[i].length; x++) {

        output.push(arr[i][x]);
      }

    } else {

      output.push(arr[i]);
    }
  }
  return output;
};

module.exports = flatten;