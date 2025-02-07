//Exercise that shows an element of the arrays based on the number of the index entered.
function getElementByIdx(arr, idx){
    if ( idx < 0 || idx > arr.length){
        return 'Index inexistent.';
    }
return arr[idx];
}

let result = getElementByIdx([1, 3, -2, -4, 6, 20], 5);

console.log(result);