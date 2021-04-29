/**
 * The selection sort algorithm sorts an array by repeatedly finding the minimum element 
 * (considering ascending order) from unsorted part and putting it at the beginning. 
 * 
 * The algorithm maintains two subarrays in a given array.
 * 1) The subarray which is already sorted.
 * 2) Remaining subarray which is unsorted.
 */
(function(arr){
    for( let i=0;i<arr.length;i++){
        // Find the minimum element in unsorted array
        let lowest = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[lowest]>arr[j]){
                lowest=j
            }
        }
        // Swap the found minimum element with the first element
        if(lowest !== i) [arr[i],arr[lowest]] = [arr[lowest],arr[i]]
    }
    console.log(arr)
})([10,1,5,8,2,4,9]);