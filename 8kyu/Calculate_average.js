// question -> Write a function which calculates the average of the numbers in a given list
// Note: Empty arrays should return 0.

// solution 
function findAverage(array) {
  if (array.length === 0) {
    return 0; // Return 0 for an empty array
  }
  
  let sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  let avg = sum / array.length;
  return avg;
}

// Optimized 
var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}
