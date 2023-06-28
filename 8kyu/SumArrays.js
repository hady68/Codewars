// // Question 
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// solution 
// Sum Numbers
function sum (numbers) {
    return 0 ? numbers.length == 0 : numbers.reduce(function (a, b) {return a + b;}, 0);
    
    
};

// OP
// Sum Numbers
sum = function (numbers) {
  "use strict";
  return numbers.reduce(function(t, n){
    return t + n;
  }, 0);
};
