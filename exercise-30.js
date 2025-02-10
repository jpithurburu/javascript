//Creates a function (extend) that will extend the object 'obj' using the Object method .assign().


const obj = {
    name: 'John Doe',
}

function extend (user){
    const method = {
        login (){
            console.log('Loggin in', this.name);
        },
        logout (){
            console.log('Loggin out', this.name);
        },
    };
    return Object.assign(user, method); 
}

const user = extend(obj);

console.log(user);
user.login();