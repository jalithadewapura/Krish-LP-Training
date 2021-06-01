let string = 'Hello World';

let countMap = new Map();
let lowercaseString = string.toLowerCase();
let characterArray = lowercaseString.split('');

for(let i=0; i<characterArray.length; i++){
    if(characterArray[i] == null)
        continue;
    let count = 1;
    for(let j=i+1; j<characterArray.length; j++){
        if(characterArray[i] === characterArray[j]) {
            characterArray[j] = null;
            count++;
        }
    }
    countMap.set(characterArray[i], count);
}



console.log(countMap);
