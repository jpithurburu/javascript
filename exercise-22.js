//Filter and shows only paid users among a list of users from an array, using .filter() method with a fat arrow function.

const users = [
    { age:17, name: 'Nick', plan: 'premium' },
    { age:13, name: 'Peggy', plan: 'free' },
    { age:32, name: 'Frank', plan: 'free' },
    { age:25, name: 'Philip', plan: 'gold' },
];

function getPaidUsers (usrs){
    return usrs.filter(u => u.plan !== 'free');
}

console.log(getPaidUsers(users));