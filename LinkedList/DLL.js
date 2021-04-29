/**
 * Doubly-linked lists have a similar implementation, 
 * but the references to both the previous and next nodes in the list
 */
class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    //adds a node at the end of the list
    push(val){
        //make a new Node
        let newNode = new Node(val)
        //if list is empty, make node head and tail
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            //otherwise add to end of list
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        //add 1 to length
        this.length++
        //return list
        return this
    }
    //remove node from end of list
    pop(){
        //if list is empty (has no head) return undefined
        if(!this.head) return undefined
        //get removed Node
        let poppedNode = this.tail
        //establish list is empty
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }
    //remove first item in list
    shift(){
        //if list is empty return undefined
        if(!this.head) return undefined
        //get shifted node
        let poppedNode = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = poppedNode.next
            this.head.prev = null
            poppedNode.next = null
        }
        //remove 1 from length
        this.length--
        return poppedNode
    }
    //adds a node at the start of the list
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
         // add current head pointer to new head(new node), and make new node new head
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    //return node at given index
    get(index){
        if(index < 0 || index >= this.length ) return null
        let current
        let count 
        let mid = this.length/2
        //check if the index is greater then the mid value
        if(index >= mid){
            current = this.tail
            count = this.length - 1
            //iterate through nodes until finding the one at index
            while(count !== index){
                current = current.prev
                count--
            }
        //check if the index is less then the mid value
        }else{
            current = this.head
            count = 0
            //iterate through nodes until finding the one at index
            while(count !== index){
                current = current.next
                count++
            }
        }
        return current
    }
    //change the node at the given index
    set(val,index){
        //find the node using already built method
        if(!this.head) return undefined
        let setNode = this.get(index)
        //if the node is found update and return
        if(setNode !== null){
            setNode.val = val
            return true
        }
        //else return false
        return false
    }
    //insert a new node at the index with the given value
    insert(val,index){
        // make a new node, find the nodes before and after it, 
        // make before's next the new node, and the newNode's next the after
        let newNode = new Node(val)
        if(!this.head) return false
        if(index < 0 || index >= this.length) return undefined
        //if index is zero use already built unshift
        if(index === 0) return !!this.unshift(val)
        //if index is at end of list, use already built push
        if(index === this.length) return !!this.push(val)
        let prevNode = this.get(index-1)
        let nextNode = prevNode.next
        prevNode.next = newNode,newNode.prev = prevNode
        newNode.next = nextNode,nextNode.prev = newNode
        this.length++
        return this
    }
    // remove node from index
    remove(index){
        if(!this.head) return false
        //if index is invalid return false
        if(index < 0 || index >= this.length) return false
        //if index is at beginning use already built shift
        if(index === 0) return !!this.shift()
        if(index === this.length-1) return !!this.pop()
        //get before and after, set before's next to after and remove after's reference from removed Node
        let getNodeToRemove = this.get(index)
        let previousNode = getNodeToRemove.prev
        let nextNode = getNodeToRemove.next
        previousNode.next = nextNode
        nextNode.prev = previousNode
        getNodeToRemove.next = null
        getNodeToRemove.prev = null
        this.length--
        return true

    }
}
