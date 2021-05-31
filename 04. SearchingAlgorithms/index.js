
let array = [12, 4, 16, 21, -3, 10, -25, 43, 19, 33, 11, 9, 15, 18];

let sortedArray = bubbleSort(array);
// sortedArray = [-25, -3,  4,  9, 10, 11, 12, 15, 16, 18, 19, 21, 33, 43];

//example for linear search algorithm
let find1 = 19;

let result1 = linearSearch(sortedArray, find1);

console.log('LinearSearch Result:-');
if(result1 != -1)
    console.log('Index of ', find1, 'is', result1);
else
    console.log(find, 'is not in the given array.');


//example for binary search algorithm
let find2 = 19;

let result2 = binarySearch(sortedArray, find2);

console.log('BinarySearch Result:-');
if(result2 != -1)
    console.log('Index of ', find2, 'is', result2);
else
    console.log(find2, 'is not in the given array.');





function linearSearch(array, find) {
    for(let index in array) {

        if(array[index] === find)
            return index;
    }
    return -1;
}


function binarySearch(sortedArray, find) {
    let start = 0;
    let end = sortedArray.length;
    
    while(true) {
        let middle = Math.floor((start + end)/2);

        if(end-start <= 1){
            return -1;
        }
        if(sortedArray[middle] > find) { // lower half
            end = middle;
            continue;
        }
        if(sortedArray[middle] < find) { // upper half
            start = middle;
            continue;
        }
        if(sortedArray[middle] == find) {
            return middle;
        }
    }
}



function bubbleSort(array) {
    duplicateArray = filterNumbers(array);

    for(let i=0; i < duplicateArray.length - 1; i++) {

        for(let j=0; j < duplicateArray.length - i - 1; j++) {

            if(duplicateArray[j] > duplicateArray[j+1]) {
                let temp = duplicateArray[j];
                duplicateArray[j] = duplicateArray[j+1];
                duplicateArray[j+1] = temp;
            }   
        }
    }

    return duplicateArray;
}


function filterNumbers(array) {
    let duplicateArray = [...array];

    for(let i=0; i< duplicateArray.length; i++) {
        
        if( typeof duplicateArray[i] !== 'number' || isNaN(duplicateArray[i]) ) {
            duplicateArray.splice(i, 1);
            i--;
        }
    }
    
    return duplicateArray;
}
    