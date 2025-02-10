//Return the amount of non-free users and the greater than 17 years old using the .reduce() method and the ternary operator.


const users = [
    { age:17, name: 'Nick', plan: 'premium' },
    { age:13, name: 'Peggy', plan: 'gold' },
    { age:11, name: 'Frank', plan: 'free' },
    { age:25, name: 'Philip', plan: 'gold' },
];

function amountPremium(usrs){
    return usrs.reduce((acc, el) => 
        el.plan !== 'free' ? acc + 1 : acc, 0);
};

function amountOlder(usrs){
    return usrs.reduce((acc, el) => 
        el.age > 17 ? acc + 1 : acc, 0);
};

console.log(amountPremium(users));
console.log(amountOlder(users));