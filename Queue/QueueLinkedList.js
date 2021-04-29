/**
 * We can achieve the best performance for a queue using a 
 * linked list rather than an array.
 */

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}
class Queue {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0 
    }
//------------FIFO-------------------
    shift(){
        if(!this.head) return undefined
        let currentNode = this.head
        this.head = currentNode.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return currentNode
    }
    unshift(val){
        var newVal = new Node(val)
        if(!this.head) {
            this.head = newVal
            this.tail = this.head
        }else{
            let currentNode = this.head
            this.head = newVal
            this.head.next = currentNode
        }
        this.length++
        return this
    }
    /**Last In, Last Out (LILO) 
     * Naive implementation would be this one using queue.push and queue.pop
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        let currentNode = this.head
        let previousNode = this.head
        while(currentNode.next){
            previousNode = currentNode
            currentNode = currentNode.next
        }
        this.tail = previousNode
        this.tail.next = null
        this.length--
        return this
    }
     */
 }

const queue = new Queue();

console.log(queue.unshift('a'));
console.log(queue.unshift('b'));

console.log(queue.shift()) // a
console.log(queue.unshift('c'));
console.log(queue.shift()) // b
console.log(queue.shift()) // c