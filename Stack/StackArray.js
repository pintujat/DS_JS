/**
 * Stacks are a data structure where the 
 * last entered data is the first to come out.
 * Last-in, First-out (LIFO). 
 * It’s like a line of people at the movies, 
 * the first to come in is the first to come out.
 */

class Stack {
    constructor() {
      this.input = [];
    }
  
    push(element) {
      this.input.push(element);
      return this;
    }
  
    pop() {
      return this.input.pop();
    }
    /**
     * Naive implementation would be this one using push() and shift() i,e 
     */
  }

const stack = new Stack();

console.log(stack.push('a'));
console.log(stack.push('b'));
console.log(stack.push('c'))

console.log(stack.pop()) // c
console.log(stack.pop()) // b
console.log(stack.pop()) // c