/**
 * Singly Linked Lists: 
 * Each node contains only one pointer to the next node. 
 * The entry point to a linked list is called the head. 
 * The head is a reference to the first node in the linked list. 
 * The last node on the list points to null. 
 * If a list is empty, the head is a null reference.
 */

class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }
}
class SingleLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0 
    }
    //adds a node at the end of the list
    push(val){
        // A newNode object is created with property val and next = null
        let newNode = new Node(val)
        //if list is empty, make node head and tail
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        //otherwise add to end of list
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        //add 1 to length
        this.length++
        //return list
        return this
    }
    //remove node from end of list
    pop(){
        //if list is empty (has no tail) return false
        if(!this.tail) return undefined
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
    //remove first item in list
    shift(){
        if(!this.head) return undefined
        let currentNode = this.head
        this.head = currentNode.next
        this.length--
        // if no node in the list
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
    //return node at given index
    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let currentNode = this.head
        while(counter !== index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode 
    }
    //change the node at the given index
    set(val,pos){
        //using the get function to find the position
        let nodeOnPos = this.get(pos)

        //     if(nodeOnPos === null) return false
        //     else nodeOnPos.val = val

        //set new value if the node on position exist
        if(nodeOnPos) {
            nodeOnPos.val = val 
            return true
        }
        return false
    }
    //insert a new node at the index with the given value
    insert(val,index){
        let newNode = new Node(val)
        if(index < 0 || index > this.length) return false
        if(index === this.length) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)
        let getPreviousToIndexNode = this.get(index-1)
        var temp = getPreviousToIndexNode.next
        getPreviousToIndexNode.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    // remove node from index
    remove(index){
         if(index < 0 || index > this.length) return undefined
         if(index === this.length-1) return this.pop()
         if(index === 0) return this.shift()
         let getPrevious = this.get(index-1)
         let removed = getPrevious.next
         getPrevious.next = removed.next
        //  getPrevious.next = getPrevious.next.next
         this.length--
         return removed
    }
    //reversing the list 
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next = null
        let prev = null
        for(let i=0;i<this.length;i++){
             next = node.next
             node.next = prev
             prev = node
             node = next
        }
        return this  
    }
 }
const myList = new SingleLinkedList();
console.log(myList.unshift(2));
console.log(myList.unshift(10));
console.log(myList.push(5));
console.log(myList.push(7));
console.log(myList.shift());
console.log(myList.pop());
console.log(myList.get(5));
console.log(myList.remove(1));
console.log(myList.unshift(5));
console.log(myList.unshift(10));

