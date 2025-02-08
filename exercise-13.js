//Compares two objects.

function similar(obj1, obj2){
    
    let different = false;

    for(let key in obj1){
        if( obj1[key] !== obj2[key] ){
            different = true;
        }
    }

    return !different;
}

let result = similar(
    {id: 2, name: 'Charles'},
    {id: 2, name: 'Charles'},
);

console.log(result);