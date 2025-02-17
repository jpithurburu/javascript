//Asks for numbers and then calculates the average and the sum of them. Has validation.

'use strict'

let acu = 0;
let con = 0;
let num = 0;


while(num >= 0){
    num = parseInt(prompt('Enter the numbers. Enter a negative number in order to finish.'));
    while(isNaN(num)){
        num = parseInt(prompt('Please enter the number again'));
    }
    if(num >= 0){
        if(isNaN(num) !== true){
            acu = acu + num;
            con = con + 1;
        }else{
            num = parseInt(prompt('Please enter the numbers again. To finish, please enter a negative number.'));
        }
    }
}

alert('Average of the entered numbers '+ (acu / con));
alert('Sum of the entered numbers '+ acu);

