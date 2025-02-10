//Groups the users by their plan.


const users = [
    { age:17, name: 'Nick', plan: 'premium' },
    { age:13, name: 'Peggy', plan: 'gold' },
    { age:11, name: 'Frank', plan: 'free' },
    { age:25, name: 'Philip', plan: 'gold' },
];

function groupBy(arr, prop){
    return arr.reduce((acc,el) => {
        let value = el[prop];
        acc[value] = acc[value] ? acc[value] : [];
        acc[value].push(el);
        return acc;
    }, {})
};


const grouped = groupBy(users, 'plan');
console.log({ grouped })