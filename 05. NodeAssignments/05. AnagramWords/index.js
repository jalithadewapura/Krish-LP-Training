let firstWord = 'ab#c deAb2';
let secondWord = 'Ba2deacb#';

let result = isAnagram(firstWord, secondWord);

console.log(result);


function isAnagram(first, second) {
    firstWord = first.toLowerCase().replace(/\s+/g , '');
    secondWord = second.toLowerCase().replace( /\s+/g , '');

    if(firstWord.length !== secondWord.length)
        return false;

    let firstArray = firstWord.split('');
    let secondArray = secondWord.split('');

    for(let i=0; i<firstArray.length; i++){
        for(let j=0; j<secondArray.length; j++){
            if(firstArray[i] === secondArray[j]){
                secondArray[j] = null;
                break;
            }
        }
    }

    for(let element of secondArray){
        if(element !== null) {
            return false;
        }
    }

    return true;
}


