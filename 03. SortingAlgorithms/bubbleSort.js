const imports = require('./index.js');


let result = bubbleSort(imports.array);
console.log(result);

function bubbleSort(array) {
    duplicateArray = imports.filterNumbers(array);

    for(let i=0; i < duplicateArray.length - 1; i++) {
        for(let j=0; j < duplicateArray.length - i - 1; j++){
            if(duplicateArray[j] > duplicateArray[j+1]){
                let temp = duplicateArray[j];
                duplicateArray[j] = duplicateArray[j+1];
                duplicateArray[j+1] = temp;
            }
            
        }
    }
    
    return duplicateArray;
}
