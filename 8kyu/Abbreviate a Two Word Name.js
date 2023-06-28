// Question _>
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// Solution 
function abbrevName(name){
  
  var first = name[0].toUpperCase();
  console.log(first);
  for(let i = 1; i<name.length;i++){
    if(name[i]==' '){
      
      let second = name[i+1].toUpperCase();
      console.log(second);
      return (first+'.'+ second); 
      break;
    }
  
  }
}

// OP
function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
