/**
 * The idea of Radix Sort is to do digit by digit sort starting from least significant 
 * digit to most significant digit. 
 * Radix sort uses counting sort as a subroutine to sort.
 */
// A utility function to get digit place in num by its position
function getDigitPlaceValue(num,pos) { 
    return Math.floor(Math.abs(num)/Math.pow(10,pos) % 10) 
}
function getMaxDigitEach(num){
    return Math.floor(Math.log10(Math.abs(num))) + 1 
}
// A utility function to get maximum value in arr
function getMaxDigitCount(arr){
    let maxDigit = 0
    for(let i=0;i<arr.length;i++){
        maxDigit = Math.max(maxDigit,getMaxDigitEach(arr[i])) 
    } 
 return maxDigit
}
function radixSort(arr){
    // Find the maximum number to know number of digits
    let maxDigitCount = getMaxDigitCount(arr)
    for(let pos=0;pos<maxDigitCount;pos++){
        let radixBucket = Array.from({length:10},() => []) 
        for(let j=0;j<arr.length;j++){
            //set the value in radixBucket base on the digit place
            radixBucket[getDigitPlaceValue(arr[j],pos)].push(arr[j])
        }
        // expanding and adding the value from bucket to arr
        arr = [].concat(...radixBucket) 
    }
    return arr
}
console.log(radixSort([1,4,3,6,9,8,10]));