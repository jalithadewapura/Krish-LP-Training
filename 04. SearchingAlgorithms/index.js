let array = [12, 4, 16, 21, null, 'abs', NaN, -3, 10, -25, 43, 19];

let find = 43;

let result = linearSearch(array, find);

if(result != -1)
    console.log('Index of ', find, 'is', result);
else
    console.log(find, 'is not in the given array.');



function linearSearch(array, find) {
    for(let index in array) {
        if(array[index] === find)
            return index;
    }
    return -1;
}

