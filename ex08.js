function checkCashRegister(price, cash, cid) {
    var currency = [["PENNY", .01], ["NICKEL",.05], ["DIME",.10], ["QUARTER",.25], ["ONE",1], ["FIVE",5], ["TEN",10], ["TWENTY",20], ["ONE HUNDRED",100]];
    var change;
    // Here is your change.
    let avail = [];
    let availSum = avail.reduce((a, b) => a + b, 0); //will use later 
    let changeDue = cash - price;
    
    let words = [];
    let divisors = [];
    let finalDivisors = [];

    // loop through currency array
    for (var j=currency.length-1;j>=0;j--) {
        //get divisors and words
        if (changeDue / currency[j][1] > 1) {
        divisors.push(currency[j][1]);
        words.push(currency[j][0]);
       
        // first index of divisors
        if (divisors.indexOf(divisors[j]) === 0 )  {
            while (changeDue > .01) {
                // multiply divisor by changeDue divided by each divisor to get num it will be subtracted from  
                var reduceDivisor = divisors[j] * Math.floor(changeDue / divisors[j]); 
                changeDue -= reduceDivisor;          
                finalDivisors.push(reduceDivisor );      
                //remove current number     
                divisors.shift();
            }       
            // For last num in array. .01 decimal fix and replace
            var last = finalDivisors[finalDivisors.length -1];
            var lastNum = parseFloat((last + changeDue).toFixed(2));
            var replaced = finalDivisors.splice(-1, 1, lastNum);
        }  
    }
  }
  //insert final numbers into words array
  let newfinal = [];
  for (var i = 0;i < words.length; i++){
    newfinal.push([words[i],finalDivisors[i]]);
  }
  console.log(newfinal);
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(7.5, 10, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(36, 40, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(15, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(37, 40, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(99, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);