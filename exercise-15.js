//Checks if an object has an specific property or method.


let object = {
    id: 1,
    name: 'Pete',
    login: function(){},
    logout: function(){},
}

let propertyName = 'login';

function hasProp(obj, property){
    let props = Object.keys(obj);

    for(let prop of props){
        if(property == prop){
            return true;
        }
    }

    return false;
}

console.log(hasProp(object, propertyName));