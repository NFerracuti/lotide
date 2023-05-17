const findKeyByValue = function(theObject, value) {

  const valuesArr = Object.values(theObject);
  const keysArr = Object.keys(theObject);

  for (let i = 0; i < valuesArr.length; i++) {

    if (value === valuesArr[i]) {
      return keysArr[i];
    }
  }
};

module.exports = findKeyByValue;