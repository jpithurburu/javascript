/**
 * Creates an N element array which element are from 1 to N.
 */

let lngth = 7;

function createArray(n){
    let array = [];
    for (i = 0; i <= n; i++){
        array[i] = i;
    }
    return array;
}

let result = createArray(lngth);

console.log(result);