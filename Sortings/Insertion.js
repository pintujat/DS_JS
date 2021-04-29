/**
 * Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards 
 * in your hands. The array is virtually split into a sorted and an unsorted part. 
 * Values from the unsorted part are picked and placed at the correct position in the sorted part.
 */
(function(arr){
    for(let i=1;i<arr.length;i++){
        let currValue = arr[i];
        // Move elements of arr[0..i-1], that are greater than currValue, 
        // to one position ahead of their current position 
        for(var j = i-1 ; j >= 0 && arr[j] > currValue ; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currValue;
    }
    console.log(arr);
})([10,1,5,8,2,4,9]);
