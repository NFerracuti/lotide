const findKey = function(obj, callback) {

  const valuesArr = Object.values(obj);
  const keysArr = Object.keys(obj);

  for (let i = 0; i < keysArr.length; i++) {
    if (callback(valuesArr[i])) {
      return keysArr[i];
    }
  }
};

module.exports = findKey;