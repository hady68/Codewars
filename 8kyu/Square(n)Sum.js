// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// ]

// Solution
function squareSum(numbers){
  let sum = 0;
let size = numbers.length-1;
  for(let i = 0; i <= size; i++){
    sum += numbers[i]**2;
    }
return sum;

}
// oP
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
