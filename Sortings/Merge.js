/**
 * Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, 
 * calls itself for the two halves, and then merges the two sorted halves. 
 * The merge() function is used for merging two halves. 
 */
function merge(arr1,arr2){
    let mergedArr = [];
    //Looping till any of the array gets empty and getting the value in sorted order
    while(arr1.length && arr2.length){
        if(arr1[0]>arr2[0]){
            mergedArr.push(arr2.shift());
        }else{
            mergedArr.push(arr1.shift());
        }
    }
    // get the remaining elements of arr1 if any
    while(arr1.length){
        mergedArr.push(arr1.shift());
    }
    // get the remaining elements of arr2 if any
    while(arr2.length){
        mergedArr.push(arr2.shift());
    }
    return mergedArr;
}
function mergeSort(arr){
    // base case to check is the arr having only one element and returning the same element
    if(arr.length<=1) return arr;
    let mid = Math.floor((arr.length)/2);
    //calling the slice method of list to divide the array into two halves
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}
const sortedArr1 = mergeSort([1,4,3,6,9,8,10]);
console.log(sortedArr1);

//-------------with variable----------------
function mergeWithVar(arr1,arr2){
    let i=0,
        j=0;
    let mergedArr = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i]>arr2[j]){
            mergedArr.push(arr2[j]);
            j++;
        }else{
            mergedArr.push(arr1[i]);
            i++;
        }
    }
    while(i < arr1.length){
        mergedArr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        mergedArr.push(arr2[j]);
        j++;      
    }
    return mergedArr;
}
function mergeSortWithVar(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor((arr.length)/2);
    let left = mergeSortWithVar(arr.slice(0,mid));
    let right = mergeSortWithVar(arr.slice(mid));
    return mergeWithVar(left,right);
}
const sortedArr2 = mergeSortWithVar([1,4,3,6,9,8,10]);
console.log(sortedArr2)