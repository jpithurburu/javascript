//Creates a function (extend) that will extend the object 'obj' using .call() method. 


const obj = {
    name: 'John Doe',
}

function Extend(){
    this.login = () => {
        console.log('Loggin in', this.name);
    }
    this.logout = () => {
        console.log('Loggin out', this.name);
    }
}

Extend.call(obj);

console.log(obj)
obj.login()
obj.logout()
