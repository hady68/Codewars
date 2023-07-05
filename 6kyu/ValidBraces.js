// question
// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. 

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False


// solution
class Stack {
  constructor() {
    this.items = [];
  }

  // add element to the stack
  add(element) {
    return this.items.push(element);
  }

  // remove element from the stack
  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // get the size of the stack
  size() {
    return this.items.length;
  }

  // get the top element of the stack
  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

function validBraces(braces) {
  let stack = new Stack();

  for (let i = 0; i < braces.length; i++) {
    let currentBrace = braces[i];

    if (currentBrace === '(' || currentBrace === '{' || currentBrace === '[') {
      stack.add(currentBrace);
    } else {
      // If closing brace is encountered and the stack is empty, it's invalid
      if (stack.isEmpty()) {
        return false;
      }

      let topBrace = stack.top();

      // Check if the current brace matches the top brace on the stack
      if (
        (currentBrace === ')' && topBrace === '(') ||
        (currentBrace === '}' && topBrace === '{') ||
        (currentBrace === ']' && topBrace === '[')
      ) {
        stack.remove();
      } else {
        // If the current brace doesn't match the top brace on the stack, it's invalid
        return false;
      }
    }
  }

  // If there are any remaining braces on the stack, it's invalid
  return stack.isEmpty();
}

// OP

function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}
