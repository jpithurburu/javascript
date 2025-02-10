//Callback function that gets a function and numbers as arguments, then uses the function and the elements to display them in the console.


function callback(fn, ...rest){
    fn(...rest);
};

callback((...args) => {
    console.log(args)
}
, 1, 2, 3, 4);