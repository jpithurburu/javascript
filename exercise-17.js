//Function that adds props to an object.

let obj = { name: 'John'};

function addProp(obj){
    if (typeof(obj) === 'object'){
        obj.id = Math.floor(Math.random() * 10);
    }
    return obj;
};

addProp(obj);
console.log(obj);