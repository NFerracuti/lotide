eqArrays = require('../eqArrays');
assertEqual = require('../assertEqual');

//test code
assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays(['1','2','3',], ['1','2','3','4']), false);
assertEqual(eqArrays([1,2,'3'], [1,2,3]), false);
assertEqual(eqArrays(['1','2','3','4'], ['1','2','3','4']), true);
