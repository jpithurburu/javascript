//Exercises that determines and shows in the console as an array, the maximum and minimum element in an array

let array = [2, 5, 7, 15, -5, -100, 55];

function getMaxMin(arr){
    let min = arr[0];
    let max = arr[0];
    for (element of arr){
        min = min < element ? min : element;
        max = max > element ? max : element;
    }
    return [min, max]
}

let number = getMaxMin(array);

console.log(number);