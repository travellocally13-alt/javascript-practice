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

// ARRAY

let transactions = [
    "Deposit    +10,000 CZK",
    "Withdrawal -2,000 CZK",
    "Deposit    +5,000 CZK",
    "Withdrawal -1,500 CZK",
    "Deposit    +3,000 CZK"
];

// LOOP

for (let i = 0; i < transactions.length; i++) {
    console.log(`Transaction ${i + 1} : ${transactions[i]}`);
}

console.log("");
console.log("================================");
console.log("  Thank you for using our ATM.");
console.log("================================");

