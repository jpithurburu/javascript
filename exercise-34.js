//Comparison between two positive numbers entered by the user with validation.

'use strict'

let num1 = parseInt(prompt('Enter a positive number'));

while(num1 <= 0 || isNaN(num1)){
    if (num1 <= 0){
        alert(`The value ${num1} is not positive`);
        num1 = parseInt(prompt('--->>  Please enter a positive number!  <<---'));
    }
    if (isNaN(num1)){
        alert(`The value is not a number`);
        num1 = parseInt(prompt('---->>  Please enter a number!  <<----'));
    }
    console.log(num1)
}

let num2 = parseInt(prompt('Enter another positive number'));

while(num2 <= 0 || isNaN(num2)){
    if (num2 <= 0){
        alert(`The value ${num2} is not positive`);
        num2 = parseInt(prompt('--->>  Please enter a positive number!  <<---'));
    }
    if (isNaN(num2)){
        alert(`The value is not a number`);
        num2 = parseInt(prompt('---->>  Please enter a number!  <<----'));
    }
    console.log(num2)
}

if (num1 == num2){
    alert('Both number are equal');
}else if(num1 > num2){
    alert(`The number ${num1} is greater`);
}else{
    alert(`The number ${num2} is greater`);
}
