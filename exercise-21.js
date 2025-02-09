//Classifies the elements of an array by their kind and populates a new array with these classification. Then shows the new array in console.

const myArray = [
    "Hello",
    12,
    "World",
    {},
    {id: 15},
    ['lala'],
]

function dividedByKind (arr){
    return {
        numbers: arr.filter(n => typeof n === 'number'),
        strings: arr.filter(n => typeof n === 'string'),
        objects: arr.filter(n => typeof n === 'object'),
    }
}

const newArray = dividedByKind(myArray);
console.log(newArray);