/**
 * Algorithm that creates key-value array based on an object array.
 */

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

let pair = [
    [{id: 1, name: 'John',}],
    [{id: 2, name: 'Charles',}],
    [{id: 3, name: 'Balthazar',}],
];


function toPairs(arr){
    let pairs = [];
    for (idx in arr){
        let element = arr[idx] 
        pairs[idx] = [element.id, element];
    }
    return pairs;
}

let result = toPairs(array);

console.log(result);