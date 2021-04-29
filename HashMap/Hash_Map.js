/**
 * A hash table (hash map) is a data structure used to 
 * implement an associative array, a structure that can map keys to values. 
 * A hash table uses a hash function to compute an index into an array of buckets or slots, 
 * from which the desired value can be found. 
 * In JavaScript we don't have any built-in hash table.
 */

class HashTable{
    constructor(size=11){
        this.keyMap = new Array(size)
    }
    /**
     * A hash function is a method or function that takes an item’s key as an input, 
     * assigns a specific index to that key and returns the index whenever the key is looked up. 
     * This operation usually returns the same hash for a given key. 
     * A good hash function should be efficient to compute and uniformly distribute keys.
     */
    _hash(key){
        let total = 0
        let weirdPrime = 51
        for(let i=0 ; i<Math.min(key.length,100);i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * weirdPrime + value) % this.keyMap.length
        }
        //Always be returning value between 0-11(keyMap size) 
        return total
    }
    set(key,val){
        // get the index from hash table
        let index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        //Store in the specified index
        this.keyMap[index].push([key,val])
        return this.keyMap  
    }
    get(key){
        let index = this._hash(key)
        if(this.keyMap[index]){
            //check for the index in keyMap using hash key
            for(let i=0; i<this.keyMap[index][i].length;i++){
                if(this.keyMap[index][i][0] === key) return this.keyMap[index][i]
            }
            return undefined
        }
    }
    values(){
        let valueArr = []
        for(let i = 0 ;i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j=0;j<this.keyMap[i].length;j++){
                    //if value is present push the value in valueArr
                    if(!valueArr.includes(this.keyMap[i][j][1])) valueArr.push(this.keyMap[i][j][1])
                }
            }
        }
        return valueArr
    }
    keys(){
        let keyArr = []
        for(let i = 0 ;i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j=0;j<this.keyMap[i].length;j++){
                    //if key is present push the key in keyArr
                    if(!keyArr.includes(this.keyMap[i][j][0])) keyArr.push(this.keyMap[i][j][0])
                }
            }
        }
        return keyArr  
    } 
}
/**
 * Hash table collisions :- Sometimes, a hash function can generate the same index for more than one key. 
 * This scenario is referred to as a hash collision. 
 * Collisions are a problem because every slot in a hash table is supposed to store a single element.
 * Hash collisions are usually handled using four common strategies.
 * 
 * Linear probing: 
 * Linear probing works by skipping over an index that is already filled. 
 * It could be achieved by adding an offset value to an already computed index. 
 * If that index is also filled, add it again and so on.
 * 
 * One drawback of using this strategy is that if you don’t pick an offset wisely, 
 * you can jump back to where you started and miss out on so many possible positions in the array.
 * 
 * Chaining: 
 * In the chaining strategy, each slot of our hash table holds a pointer to another data structure 
 * such as a linked list or a tree. Every entry at that index will be inserted 
 * into the linked list for that index.
 * 
 * As you can see, chaining allows us to hash multiple key-value pairs at the
 * same index in constant time (insert at head for linked lists). 
 * This strategy greatly increases performance, but it is costly in terms of space.
 * 
 * Resizing the Array or List: 
 * Another way to reduce collisions is to resize the list or array. We can set a threshold 
 * and once it is crossed, we can create a new table which is double the size of the original. 
 * All we have to do then is to copy the elements from the previous table.
 * 
 * Resizing the list or array significantly reduces collisions, 
 * but the function itself is costly. Therefore, we need to be careful about the threshold we set. 
 * A typical convention is to set the threshold at 0.6, 
 * which means that when 60% of the table is filled, the resize operation needs to take place.
 * 
 * Double hashing: In double hashing, there are two hash functions. 
 * The second hash function is used to provide an offset value in case the first function 
 * causes a collision. Double hashing can find the next free slot faster than a linear probing approach.
 *  
 * This is useful for applications with a smaller hash table.
 * The following function is an example of double hashing:
 * (firstHash(key) + i * secondHash(key)) % tableSize 
 */