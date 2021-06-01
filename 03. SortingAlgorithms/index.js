
array = [12, 4, 16, 21, null, 'abs', NaN, -3, 10, -25, 43, 11, 20, 18, 'xyz', -15];

//creating duplicate array with only numbers
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

module.exports = {
    filterNumbers,
    array
}