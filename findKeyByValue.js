const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(theObject, value) {

  const valuesArr = Object.values(theObject);
  const keysArr = Object.keys(theObject);

  for (let i = 0; i < valuesArr.length; i++) {

    if (value === valuesArr[i]) {
      return keysArr[i];
    }
  }
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const restaurantsInToronto = {
  italian: "Gio Ranas",
  japanese: "kibo",
  hungarian: "Country Style",
  fast_food: "Harveys"
}

assertEqual(findKeyByValue(restaurantsInToronto, "Gio Ranas"), "italian");
assertEqual(findKeyByValue(restaurantsInToronto, "McDonalds"), undefined);
assertEqual(findKeyByValue(restaurantsInToronto, "Country Style"), "hungarian");
