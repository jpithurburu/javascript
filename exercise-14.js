//Lists the methods of an object.


let object = {
    id: 1,
    name: 'Pedro',
    login: function (){},
    logout: function (){},
}

function isMethod(obj){
    for (idx in obj){
        if (typeof (obj[idx]) == 'function'){
            console.log(idx);
        }
    }
}

isMethod(object);