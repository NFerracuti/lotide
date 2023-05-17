const without = function(source, itemsToRemove) {

  let source2 = source.slice(0);
  for (let i = 0; i < source.length; i++) {

    for (let x = 0; x < itemsToRemove.length; x++) {

      if (itemsToRemove[x] === source[i]) {

        source2.splice(i, 1);
      }
    }
  }
  return source2;
};

module.exports = without;