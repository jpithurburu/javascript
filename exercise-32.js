//A function that gets another function and elements as arguments. Later the function in the argument uses the elements in the argument to sum them and show them in the console.

function sum(fn, ...rest){
    let result = rest.reduce((acc, el) => acc + el);
    fn(result);
};


sum(result => {
    console.log(result)
}, 1, 2, 3, 4);