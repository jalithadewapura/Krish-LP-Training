const imports = require('./index.js');

let result = quickSort(imports.array);

console.log(result);

function quickSort(array){
    let duplicateArray = imports.filterNumbers(array);
    let start = 0;
    let end = duplicateArray.length-1;

    let result = loop(duplicateArray, start, end);
    return result;
}

function loop(array, start, end) {
    let pivot = partition(array, start, end);

    if(pivot-1 > start)
        loop(array, start, pivot-1);
    if(pivot < end)
        loop(array, pivot, end);

    return array;
}

function partition(array, start, end){
    let pivot = array[end];
    let i = start-1;

    for(let j = start; j <= end; j++) {

        if(array[j] <= pivot) {
            i++;
            if(i == j)
                continue;
            
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        
    }
    //pivot index;
    return i;
}