//Exercise that asks for two number to the user and determines the greater number between them.
'use strict'

function findGreater(a, b){
    if (a > b){
        console.log('The greater number is: '+ a);
    }else if (a < b){
        console.log('The greater number is: '+ b);
    }else{
        console.log('Both are equal');
    }
}

let a = parseInt(prompt('Please enter the first number'));
let b = parseInt(prompt('Please enter the second number'));

let greater = findGreater(a, b);

console.log(greater);