const takeUntil = function(arr, callback) {
  result = [];
  for (let i = 0; i <= arr.length; i++) {
    if (!callback(arr[i])) {
      result.push(arr[i]);
    } else {
      break;
    }
  } 
  return result;
};

module.exports = takeUntil;