let transactions = [
    {
        type: "Deposit",
        amount: 10000
    },
    {
        type: "Withdrawal",
        amount: 2000
    },
    {
        type: "Deposit",
        amount: 5000
    }
];
let openingBalance = 50000;
let totalDeposits = 0;
let totalWithdrawals = 0;



for (let i = 0; i < transactions.length; i++) {
    console.log(`Transaction ${i + 1} : ${transactions[i].type}`);
    console.log(`Amount        : ${transactions[i].amount.toLocaleString()} CZK`);

    if (transactions[i].type === "Deposit") {
        totalDeposits = totalDeposits + transactions[i].amount;
    }
    if (transactions[i].type === "Withdrawal") {
        totalWithdrawals = totalWithdrawals + transactions[i].amount;
    }

}

let currentBalance = openingBalance + totalDeposits - totalWithdrawals;

console.log()
console.log(`Opening Balance  : ${openingBalance.toLocaleString()}  CZK`);
console.log(`Total Deposit    : ${totalDeposits.toLocaleString()}  CZK`);
console.log(`Total Withdrawal : ${totalWithdrawals.toLocaleString()}   CZK`);
console.log(`Current Balance  : ${currentBalance.toLocaleString()}  CZK`);

