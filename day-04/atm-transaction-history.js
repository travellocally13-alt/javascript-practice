function printHeader() {
    console.log("================================");
    console.log("    ATM TRANSACTION HISTORY");
    console.log("================================");
    console.log("");
}

let accountHolder = "John Doe";

printHeader();

console.log(`Account Holder : ${accountHolder}`);
console.log("");

for (let i = 1; i <= 5; i++) {
    if (i === 1) {
        console.log(`Transaction ${i} : Deposit      +10,000 CZK`);
    } else if (i === 2) {
        console.log(`Transaction ${i} : Withdrawal   -2,000 CZK`);
    } else if (i === 3) {
        console.log(`Transaction ${i} : Deposit      +5,000 CZK`);
    } else if (i === 4) {
        console.log(`Transaction ${i} : Withdrawal   -1,500 CZK`);
    } else {
        console.log(`Transaction ${i} : Deposit      +3,000 CZK`);
    }
}

console.log("");
console.log("================================");
console.log("  Thank you for using our ATM.");
console.log("================================");

