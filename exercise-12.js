//Asks for username and generates a random user ID using a function, then shows them in console.


function createUser (name){
    return {
        user:  Math.floor(Math.random() * 10),
        name,
    };
}


console.log(createUser(prompt('Please enter your username')), createUser(prompt('Please enter another username')));