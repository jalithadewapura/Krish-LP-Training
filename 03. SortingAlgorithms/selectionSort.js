const imports = require('./index.js');


let result = selectionSort(imports.array);
console.log(result);


function selectionSort(array) {
    let duplicateArray = imports.filterNumbers(array);

    for(let i=0; i < duplicateArray.length -1; i++){
        let lowest = duplicateArray[i];
        let indexOfLowest = i;

        for(let j=i; j < duplicateArray.length; j++){
            if(duplicateArray[j] < lowest){
                lowest = duplicateArray[j];
                indexOfLowest = j;
            }
        }
        let temp = duplicateArray[i];
        duplicateArray[i] = lowest;
        duplicateArray[indexOfLowest] = temp;
    }

    return duplicateArray;
}
