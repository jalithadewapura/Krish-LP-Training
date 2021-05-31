let nameArray = ['baa', 'cat', 'art', 'hello', 'world', 'java', 'javaScript', 'node', 'angular', 'python', 
                'name', 'class1', 'class', 'animal', 'car', 'vehicle', 'bike', 'aaaa', 'aba', 'home', 
                'bottle', 'pencil', 'phone', 'laptop', 'tablet', 'watch', 'pen', 'charger', 'computer', 'cover'];


let result = application(nameArray);
console.log(result);


function calculateValue(string) {
    let charArray = string.toLowerCase().split('');
    let charMap =  new Map([ 
        ['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5], ['f', 6], ['g', 7], ['h',8], ['i', 9], ['j', 10], ['k', 11], ['l', 12],
        ['m', 13], ['n', 14], ['o', 15], ['p', 16], ['q', 17], ['r', 18], ['s', 19], ['t',20], ['u', 21], ['v', 22], ['w', 23], ['x', 24],
        ['y', 25], ['z', 26], ['1', 1], ['2', 2], ['3', 3], ['4', 4], ['5', 5], ['6',6], ['7', 7], ['8', 8], ['9', 9], ['0', 0]
    ]);
    let value = 0;

    for(let element of charArray) {
        if(charMap.has(element))
            value += charMap.get(element);
        else
            return 'A name consists a special character';
    }

    return value;
}

function application(array){
    let duplicateArray = [...array];
    //Sort by alphabetical order. If two names have same value, this is useful.
    let nameArray = duplicateArray.sort();
    let valueArray = [];

    for(let element of nameArray){
        let value = calculateValue(element);
        if(typeof value !== 'number')
            return '\nError: A name consists a special character \n';
        valueArray.push(value);
    }
    
    for(let i=0; i < valueArray.length - 1; i++) {
        for(let j=0; j < valueArray.length - i - 1; j++){
            if(valueArray[j] > valueArray[j+1]){
                let tempValue = valueArray[j];
                valueArray[j] = valueArray[j+1];
                valueArray[j+1] = tempValue;

                let tempName = nameArray[j];
                nameArray[j] = nameArray[j+1];
                nameArray[j+1] = tempName;
            }
        }
    }

    return nameArray;
}