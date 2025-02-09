//Joins the elements of array#1 using the .join() method and places a blank space between each element. Also creates the greetings variable in which each element is splitted using every space to identify the resulting divided variable's elements. Finally divided's elements are joined with .join() method and placed an underscore between each element before being shown in the console.


let arr1 = ['Hi', 'Balthazar', 'how', 'are', 'you?'];

let message = arr1.join(' ');

let greetings = 'Hello my friend, is everything fine?'

let divided = greetings.split(" ");

console.log(arr1.join(' '));
console.log(divided.join('_'));
