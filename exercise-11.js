//Asks for username and generates a random user ID using a constructor function, then shows them in console.

function User(name){
    this.id = Math.floor(Math.random()*10);
    this.name = name;
}

let user = prompt('Please enter your username');
let user2 = prompt('Please enter another username');

console.log(new User(user), new User(user2));