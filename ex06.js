const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var gcd = function(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}

var a, b;

function input(prompt) {
    return new Promise((callbackFn, errorFn) => {
        readline.question(prompt, (uinput)=> {
            callbackFn(uinput);
        }, ()=> {
            errorFn();
        });
    });
}

const main = async () => {
    a = await input("Enter the first number:");
    b = await input("Enter the second number: ");
    console.log(gcd(a, b));
    
    readline.close();
};

main();