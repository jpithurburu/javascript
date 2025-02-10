// Filter only paid users
// Sort them by age
// Return only their names
// Show them in an unordered list through the console

const users = [
    { age:17, name: 'Nick', plan: 'premium' },
    { age:13, name: 'Peggy', plan: 'gold' },
    { age:11, name: 'Frank', plan: 'free' },
    { age:25, name: 'Philip', plan: 'gold' },
];

let paidUsers = users.filter(users => users.plan != 'free' )
paidUsers.sort((a, b) => a.age - b.age);

const list = paidUsers.map(u => `<li>${u.name}</li>`);

const html = `
    <ul>
        ${list.join(`
        `)}
    </ul>
`

console.log(html);