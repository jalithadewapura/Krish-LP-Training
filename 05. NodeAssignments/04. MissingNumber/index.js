let array = [50, 51, 52, 53, 54, 55, 57, 58];

let missingNo = missingNumber(array);

console.log(missingNo);


function missingNumber(array){
    if(array.length == 0)
        return 'Empty array';

    let firstNumber = array[0];
    for(let i = 0; i< array.length; i++){
        let nextNumber = firstNumber + i;
        if(array[i] !== nextNumber)
            return nextNumber;
    }

    return 'No missing number';
}
