/**
 * Returns an object array based a key-value array input.
 */

let pair = [
    [1, {name: 'John',}],
    [2, {name: 'Charles',}],
    [3, {name: 'Balthazar',}],
];

let array = [{  
    id: 1, 
    name: 'John',
},{ 
    id: 2, 
    name: 'Charles',
},{ 
    id: 3, 
    name: 'Balthazar',
}];

function toCollection(arr){
    let collection = [];
    for (idx in arr){
        let element = arr[idx];
        collection[idx] = element[1];
        collection[idx].id = element[0];
    }

    return collection;
}

let result = toCollection(pair);

console.log(result);