const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(obj, callback) {

  const valuesArr = Object.values(obj);
  const keysArr = Object.keys(obj);

  for (let i = 0; i < keysArr.length; i++) {
    if (callback(valuesArr[i])) {
      return keysArr[i];
    }
  }
};


const result1 = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

const result2 = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4));

const result3 = (findKey({
  'monkey': 'brown',
  'zeebra': 'white',
  'lion': 'orange'
}, z => z === 'orange'))


assertEqual(result1, 'noma');

assertEqual(result2, undefined);

assertEqual(result3, 'lion');