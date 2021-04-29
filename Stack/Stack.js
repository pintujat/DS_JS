/**
 * We can also implement 
 * Stack using a linked list instead of an array. 
 * The runtime will be the same.
 */
class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}
class Stack {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0 
    }
//--------------LIFO---------------
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
    /**Last In, Last Out (LILO) 
     * Naive implementation would be this one using queue.unshift() and queue.pop
     
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

const stack = new Stack();

console.log(stack.push('a'));
console.log(stack.push('b'));
console.log(stack.push('c'))

console.log(stack.shift()) // c
console.log(stack.shift()) // b
console.log(stack.shift()) // c