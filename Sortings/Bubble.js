/**
 * The idea behind bubble sort is that every pair of adjacent values is compared, 
 * and then the two values swap positions if the first value is greater than the second. 
 * This way during each pass through the array, the largest value “bubbles up” to the top, 
 * and after each pass the elements furthest to the right are in the correct order. 
 */
//-----Optimised-----
//if nearly sorted array Time Complexity will be Big O(n)
(function(arr){
    for(let i=arr.length;i>0;i--){
        //check if there is any swap
        isSwap = false;
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isSwap = true;
            }
        }
        //break is there is no swap
        if(!isSwap) break;
    }
    console.log(arr);
})([1,4,3,7,8,9,6]);

//-----Not Optimised----
(function(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    console.log(arr);
})([1,4,3,7,8,9,15,6]);