var n = 100;
var arr = [];
for (var counter = 0; arr.length < n; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        arr.push(counter);
    }
}
console.log(arr);