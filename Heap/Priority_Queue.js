/**
 * With a few minor tweaks we can mix binary heaps with queues and 
 * create a type of queue that organizes our data by importance rather than when it was added.
 * 
 * We can achieve this simply enough by storing nodes instead of single numbers. 
 * Each node will have a priority level (let’s say from 1-5), which it will use to determine the order. 
 * When the priorities on two nodes are the same, the left child, 
 * since it will have been added first, will go first.
 * All we have to do is use the node’s priority every time we make a comparison in 
 * an if statement.
 */

class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
    }
  }
  
  class PQ {
    constructor() {
      this.values = [];
    }
    enqueue(val, priority) {
      //creating a new node with the priority
      let newNode = new Node(val, priority);
      this.values.push(newNode);
      this.bubbleUp();
    }
    bubbleUp(){
      let index = this.values.length - 1;
      const current = this.values[index];
  
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex];
  
        //checking if parent priority is greater then current element priority
        if (parent.priority >= current.priority) {
          this.values[parentIndex] = current;
          this.values[index] = parent;
          index = parentIndex;
        } else break;
      }
    }
    dequeue() {
      const min = this.values[0];
      const end = this.values.pop();
      if(this.values.length>0){
      this.values[0] = end;
      this.sinkDown();
      }
      return min;
    }
    sinkDown(){
      let index = 0;
      const length = this.values.length;
      const current = this.values[0];
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;
  
        if (leftChildIndex < length) {
          leftChild = this.values[leftChildIndex];
          if (leftChild.priority < current.priority) swap = leftChildIndex;
        }
        if (rightChildIndex < length) {
          rightChild = this.values[rightChildIndex];
          if (
            (swap === null && rightChild.priority < current.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          )
            swap = rightChildIndex;
        }
  
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = current;
        index = swap;
      }
    }
  }
  
  const tree = new PQ();
  tree.enqueue(3, 2);
  tree.enqueue(4, 5);
  tree.enqueue(31, 1);
  tree.enqueue(6, 3);
  console.log(tree.dequeue()); // 4
  console.log(tree.dequeue()); // 6
  console.log(tree.dequeue()); // 3
  console.log(tree.dequeue()); // 31