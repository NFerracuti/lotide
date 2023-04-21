const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};
const tail = function(x) {

  let output = [];
  for (let i = 1; i < x.length; i++) {
    output.push(x[i]);

  }
  return output;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


//test to make sure the original array is not being modified
 const f = ["x", "k", "t"];
 tail(f);
 assertEqual(f.length, 3);

 const sing = tail([3]);
 console.log(sing);

 const emp = tail([]);
console.log(emp);