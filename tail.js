const tail = function(x) {

  let output = [];
  for (let i = 1; i < x.length; i++) {
    output.push(x[i]);

  }
  return output;
};


module.exports = tail;
