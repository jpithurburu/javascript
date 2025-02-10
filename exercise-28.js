const usuarios = [
    { edad:17, nombre: 'Nico', plan: 'premium' },
    { edad:13, nombre: 'Chanchito', plan: 'free' },
    { edad:32, nombre: 'Fernanda', plan: 'free' },
    { edad:25, nombre: 'Felipe', plan: 'gold' },
];

const users = [
    {age: 22 , name: 'Michael' , membership: 'premium' },
    {age: 27 , name: 'Kevin' , membership: 'free' },
    {age: 29 , name: 'Happy pig' , membership: 'free' },
];

//Unify users and usuarios' structures
//Merge arrays
//Sort users by age
//Create HTML template
// <li>Name: name, Age: age</li>
//Print list through the console.


const newUsers = usuarios.map(u => ({
    age: u.edad,
    name: u.nombre,
    membership: u.plan,
}));

let usersMerged = users.concat(newUsers);

usersMerged.sort((a, b) => a.age - b.age);

const list = usersMerged.map(u => `<li>Name: ${u.name}, Age: ${u.age}</li>`);

const html = `
    <ul>
        ${list.join(`
        `)}
    </ul>
`

console.log(html);

