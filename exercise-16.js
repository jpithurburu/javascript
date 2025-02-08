//Copy an object

let obj1 = {
    id: 1,
    name: 'John',
    lname: 'Doe',
    login: function(){},
    logout: function(){},
};

function copyObject(obj){
    let objNew = {};
        for(idx in obj){
            objNew[idx] = obj[idx];
        }
    return objNew;
};

let obj2 = copyObject(obj1);

console.log({obj1, obj2});