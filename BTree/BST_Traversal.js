/**
 * A tree is a non linear data structure. 
 * A Binary Search tree is a binary tree in which nodes that have lesser 
 * value are stored on the left while the nodes 
 * with a higher value are stored at the right.
 */

class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){ 
        // root of a binary seach tree
        this.root = null;
    }
    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            // find the correct position in the tree and add the node
            while(true){
                if(val === currentNode.val) return undefined;
                if(val < currentNode.val){
                    // if currentNode left is null insert node here
                    if(currentNode.left === null){
                        currentNode.left = newNode;
                        return this
                    } else currentNode = currentNode.left;
                }else{
                // if currentNode right is null insert node here
                if(currentNode.right === null) {
                    currentNode.right = newNode;
                    return this
                } else currentNode = currentNode.right;
               }
            }
        }
        return this
    }
    find(val){
        // if trees is empty return null
        if(!this.root) return undefined;
        let currentNode = this.root;
        let found = false;
        while(currentNode && !found){
            if(val < currentNode.val){
                currentNode = currentNode.left;
            }else if(val > currentNode.val){
                currentNode = currentNode.right;
            }else{
                found = true;
            }
        }
        // if node is not found return undefined
        if(!found) return undefined;
        return currentNode;
    }
    /**
     * BFS is a traversing algorithm where you should start traversing 
     * from a selected node (source or starting node) 
     * and traverse the graph layerwise thus exploring the neighbour nodes 
     * (nodes which are directly connected to source node)
     */
    bfs(){
        let queue = [];
        let data = [];
        queue.push(this.root);
        while(queue.length){
            let node = queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    /**
     * preorder(node) – It performs preorder traversal of a tree 
     * starting from a given node 
     */
    dfsPreOrder(){
        let data = [];
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data
    }
    /**
     * postorder(node) – It performs postorder traversal of a tree 
     * starting from a given node
     */
    dfsPostOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }
    /**
     * inorder(node) – It performs inorder traversal of a tree 
     * starting from a given node 
     */
    dfsInOrder(){
        let data = [];
        function traverse(node){
            if(node.left)  traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}
let myList = new BinarySearchTree();
myList.insert(5);
myList.insert(1);
myList.insert(13);
myList.insert(2);
myList.insert(9);
myList.insert(15);
myList.insert(3);

//                5
//             /     \
//           1       13
//            \     /  \
//             2   9    15
//              \
//               3

console.log("BFS : ",myList.bfs()) // [5, 1, 13, 2, 9, 15, 3]
console.log("PreOrder : ",myList.dfsPreOrder()) // [5, 1, 2, 3, 13, 9, 15]
console.log("InOrder : ",myList.dfsInOrder()) // [1, 2, 3, 5, 9, 13, 15]
console.log("PostOrder : ",myList.dfsPostOrder()) // [3, 2, 1, 9, 15, 13, 5]
