//Shows all the numbers between the two numbers entered.
'use Strict'

let num1 = parseInt(prompt('Please enter a number.'));
let num2 = parseInt(prompt('Please enter another number'));

document.write('<h3>The following numbers are between the numbers entered: </h3>');
for( let i = num1 ; i <= num2 ; i++){
    if(isNaN(i)){
        document.write('<p>The element entered is not a number.</p>');
    }else{
        document.write('<p>'+ i +'</p>');
    }
}
