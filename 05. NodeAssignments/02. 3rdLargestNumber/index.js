let array = [1, 15, 2, 3, -20, 'abc', undefined, NaN];


let thirdMax = application(array);
console.log(thirdMax);



function application(array) {
    let duplicateArray = [...array];

    if(duplicateArray.length < 3)
        return "Array doesn't have 3 elements";

    for(let i=0; i<2; i++ ){
        let indexOfMax = findLargest(duplicateArray);
        duplicateArray[indexOfMax] = null;
    }

    let index = findLargest(duplicateArray);
    let nextMax = duplicateArray[index];

    //3rd maximum number
    return nextMax;
}


function findLargest(array) {
    for(let index in array){
        //remove all strings, objects
        if(typeof array[index] !== 'number')
            array[index] = null;
    }

    let max = Math.max(...array);

    for(let index in array){
        if(max === array[index])
            return index;
    }
}