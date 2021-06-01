const imports = require('./index.js');
let duplicateArray = imports.filterNumbers(imports.array);


let result = mergeSort(duplicateArray);
console.log(result);


function mergeSort(array){
    if(array.length < 2)
        return;
        
    //divide this array into half
    let middle = Math.floor(array.length/2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    //continue until arrays with single element
    mergeSort(left);
    mergeSort(right);

    //meger the elements
    merge(left, right, array);
    return array;
}

function merge(left, right, result){
    let i = 0;  //for left array
    let j = 0;  //for right array
    let k = 0;  //for result array

    while(i < left.length && j < right.length) {
        if(left[i] <= right[j])
            result[k++] = left[i++];
        else
            result[k++] = right[j++];
    }
    //if left half not completed
    while(i < left.length) {
        result[k++] = left[i++];
    }
    //if right half not completed
    while(j < right.length) {
        result[k++] = right[j++];
    }
}