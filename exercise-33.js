//Sorts the letters in the string entered and erases the blank spaces in the string.

function sortThem(txt, fn){
    aux = txt.toLowerCase().split('').sort((a, b) => {
        if (a > b){
            return 1;
        }
        if (a < b){
            return -1;
        }
    }).join('')
    fn(aux);
};


sortThem('Hello world', console.log)