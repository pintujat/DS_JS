/**
 * Queues are a data structure where the 
 * first data to get in is also the first to go out. 
 * First-in, First-out (FIFO). 
 * we are using the built-in Array.push and Array.pop. 
 * Both have a runtime of O(1)
 */

class Queue {
    constructor() {
      this.in = [];
      this.out = [];
    }
  
    add(element) {
      this.in.push(element);
      return this.in
    }
  
    remove() {
      if(!this.out.length) {
        while(this.in.length) {
          this.out.push(this.in.pop());
        }
      }
      return this.out.pop();
    }
    /**
     * Naive implementation would be this one using Array.push and Array.shift
     * remove() {
     *  return this.input.shift();
     * } 
     */
  }

const queue = new Queue();

console.log(queue.add('a'));
console.log(queue.add('b')); 

console.log(queue.remove()) // a
console.log(queue.add('c'));
console.log(queue.remove()) // b
console.log(queue.remove()) // c