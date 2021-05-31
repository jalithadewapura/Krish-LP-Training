
array = [12, 4, 16, 21, null, 'abs', NaN, -3, 10, -25, 43, 19];



let result = bubbleSort(array);
//console.log(result);

let result2 = selectionSort(array);
console.log(result2);

function bubbleSort(array) {
    duplicateArray = filterNumbers(array);

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

function filterNumbers(array) {
    let duplicateArray = [...array];
    for(let i=0; i< duplicateArray.length; i++){
        
        if( typeof duplicateArray[i] !== 'number' || isNaN(duplicateArray[i]) ){
            duplicateArray.splice(i, 1);
            i--;
        }
    }
    
    return duplicateArray;
}

function selectionSort(array) {
    let duplicateArray = filterNumbers(array);

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