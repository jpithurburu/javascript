//Classifies the elements of an array by their kind using .reduce(). Then shows the new array in console.


const myArray = [
    "Hello",
    12,
    true,
    "World",
    {},
    {id: 15},
    ['lala'],
]

function dividedByKind(arr){
    return arr.reduce((acc, el) => {
        let key = typeof(el);
        acc[key] = acc[key] ? acc[key] : [];
        acc[key].push(el);
        return acc;
    }, {});
}

console.log(dividedByKind(myArray));