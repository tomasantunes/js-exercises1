const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(prompt) {
    return new Promise((callbackFn, errorFn) => {
        readline.question(prompt, (uinput)=> {
            callbackFn(uinput);
        }, ()=> {
            errorFn();
        });
    });
}

function Factorial(n) {
    if (n === 0) { 
        return 1; 
    }
    else { 
        return n * Factorial( n - 1 ); 
    }
}

const main = async () => {
    n = await input("Enter a number:");
    console.log(Factorial(Number(n)));
    
    readline.close();
};

main();