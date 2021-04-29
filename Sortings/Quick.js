/**
 * QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and 
 * partitions the given array around the picked pivot. 
 * There are many different versions of quickSort that pick pivot in different ways. 
 * 
 * Always pick first element as pivot.
 * Always pick last element as pivot (implemented below)
 * Pick a random element as pivot.
 * Pick median as pivot.
 */

/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function getPivot(arr,start=0,end=arr.length+1){
    let pivot = arr[start];
    let swapIndex = start;
    for(let i=start+1;i<end;i++){
        // If current element is smaller than the pivot
        if(pivot>arr[i]){
            ++swapIndex;
            //Swap the current element with the current incremented swapIndex
            [arr[i],arr[swapIndex]] = [arr[swapIndex],arr[i]];
        }
    }
    [arr[swapIndex],arr[start]]= [arr[start],arr[swapIndex]];
    return swapIndex;
}
function quickSort(arr,start=0,end=arr.length-1){
    if(start<end){
        let myPivot = getPivot(arr,start,end)
        quickSort(arr,start,myPivot-1) // Not to include pivot
        quickSort(arr,myPivot+1,end) // Not to include pivot
    }
    return arr

}
const sortedArr = quickSort([10,50,5,4,9,8,15]);
console.log(sortedArr)