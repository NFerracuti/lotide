// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
  return false;
  }

  for (let i in object1) {
    if (Array.isArray(object1[i])) {
      if(!eqArrays(object1[i], object2[i])) {
        return false;
      }

    } else {
      if(object1[i] !== object2[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
