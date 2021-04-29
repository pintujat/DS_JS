/**
 * we create a very consistent pattern for finding a node’s children. 
 * All of a node’s left children will be exactly at a position 2n + 1 away from their parent, 
 * with n being their parent’s index, and all right children being 2n + 2.
 */

class MaxBinaryHeap{
    constructor(){
        this.values = []
    }
    insert(val){
        this.values.push(val)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length - 1
        let element = this.values[idx]
        //loop till parent index is greater then 0
        while(idx > 0){
            // getting the parent index
            let parentIdx = Math.floor((idx - 1)/2)
            // store the value of parent using its index
            let parent = this.values[parentIdx]
            // break if the parent is already contains bigger value
            if(element < parent) break
            // swap the smaller value to the right
            [this.values[idx],this.values[parentIdx]] = [this.values[parentIdx],this.values[idx]]
            idx = parentIdx
        }
        console.log(this.values)
    }
    // get the max value from the heap
    extractMax(){
        let max = this.values[0]
        const popVal = this.values.pop()
        this.values[0] = popVal
        console.log(this.values)
        this.sinkDown()
        console.log(this.values)
        return max
    }
    sinkDown(){
        let idx = 0
        let length = this.values.length
        let element = this.values[0]
        while(true){
            let leftChildIndex = 2 * idx + 1
            let rightChildIndex = 2 * idx + 2
            let leftChild,rightChild
            let swap = null
            // checking if the left child index is within bound
            if(leftChildIndex < length){
                //get the left child value
                leftChild = this.values[leftChildIndex]
                //if element is lesser then the left child save the index of left child in swap index
                if(element < leftChild){
                    swap = leftChildIndex
                }
            }
            // checking if the right child index is within bound
            if(leftChildIndex < length){
                // get the right child value
                rightChild = this.values[rightChildIndex]
                if(
                    // if element is lesser then the left child & leftchild is smaller then right child 
                    // save the index of left child in swap index
                    (swap === null && element<rightChild)||
                    (swap !== null && leftChild < rightChild)
                ){
                    swap = rightChildIndex
                }
            }
            if(!swap) break
            [this.values[idx],this.values[swap]] = [this.values[swap],this.values[idx]]
            idx = swap
        }
    } 
}

const tree = new MaxBinaryHeap();
tree.insert(3);
tree.insert(4);
tree.insert(31);
tree.insert(6);
console.log(tree); // [31, 6, 4, 3]
tree.extractMax();
console.log(tree);