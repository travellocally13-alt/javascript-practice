// Functions
function printHeader() {
    console.log("********************************");
    console.log("           BANK REPORT");
    console.log("********************************");
}
printHeader();

function deposit(balance, amount) {
    return balance + amount;
}

function withdraw(balance, amount) {
    return balance - amount;
}

function checkStatus(balance) {
    if (balance >= 50000) {
        return "Healthy";
    } else if (balance >= 20000) {
        return "Stable";
    } 
    else {
        return "Low Balance";
    }
}

// Variables

let accountHolder = "John Doe";
let openingBalance = 50000;
let depositAmount = 15000;
let withdrawAmount = 20000;

let balance = openingBalance;

balance = deposit(balance, depositAmount);
balance = withdraw(balance, withdrawAmount);

// Output

console.log();
console.log(`Account Holder   : ${accountHolder}`);
console.log(`Opening Balance  : ${openingBalance.toLocaleString()}`);
console.log(`Deposit Amount   : ${depositAmount.toLocaleString()}`);
console.log(`Withdraw Amount  : ${withdrawAmount.toLocaleString()}`);
console.log(`--------------------------`);
console.log(`Current Balance  : ${balance.toLocaleString()}`);
console.log(`Account Status   : ${checkStatus(balance)}`);
