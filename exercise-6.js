//Exercise that counts the amount of positive number in an array and shows it in the console.


let array = [2, -33, -1, 15, -5, -100, 55, 44, 20];

function positives(arr){
    
    let counter = 0;
    
    for(element of arr){
        if (element > 0){
            counter++;
        }
    }
    return counter;
}
let counter = positives(array);

if (counter > 0){
    console.log('There are '+ counter +' positive numbers');
} else {
    console.log('There are no positive numbers in the array!!');
};

