//Returns the oldest user of the array using .reduce() method.


const users = [
    { age:17, name: 'Nick', plan: 'premium' },
    { age:13, name: 'Peggy', plan: 'gold' },
    { age:11, name: 'Frank', plan: 'free' },
    { age:25, name: 'Philip', plan: 'gold' },
];

function getOldest(arr){
    return arr.reduce((prevElement,element) => {
        return element.age > prevElement.age ? element : prevElement});
}

const oldest = getOldest(users);
console.log(oldest);