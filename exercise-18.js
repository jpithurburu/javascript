//Concatenate two arrays and then shows an sliced part of the resulting combined array.

let arr1 = [1, 2];
let arr2 = [3, 4];

let combined = arr1.concat(arr2);

let divided = combined.slice(1,3);

console.log(divided);