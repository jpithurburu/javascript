//Merges array#1 and array#2 with array#3 which has fixed elements. Arrays#1 and #2 are merged using spread operator. Then copies array#3 into array#4 and eliminates the last element of array#3. At the end, both arrays #3 and #4 are shown trough console.

let arr1 = [1, 2];
let arr2 = [5, 6];

let arr3 = [0, ...arr1,3,4,...arr2,7,8];
let arr4 = [...arr3]
arr3.pop();

console.log(arr3, arr4);