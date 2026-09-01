const transactions = [
    { type: "deposit", amount: 10000 },
    { type: "withdrawal", amount: 12000 },
    { type: "deposit", amount: 5000 },
    { type: "deposit", amount: 25000},
    { type: "withdrawal", amount:15000}
];

const openingBalance = 50000;

function calculateTotal(transactions, type) {
    const filteredTransactions = transactions.filter(transaction => {
        return transaction.type === type;
    });

    const total = filteredTransactions.reduce((total, transaction) => {
        return total + transaction.amount;
    }, 0);

    return total;

}


const totalDeposits = calculateTotal (transactions, "deposit");

const totalWithdrawals = calculateTotal(transactions, "withdrawal");

console.log(totalDeposits);
console.log(totalWithdrawals);


const closingBalance = openingBalance + totalDeposits - totalWithdrawals;


const report = `
       TRANSACTION REPORT

       Opening Balance: ${openingBalance} CZK
       Total Deposits: ${totalDeposits} CZK
       Total Withdrawals: ${totalWithdrawals} CZK
       Closing Balance: ${closingBalance} CZK
       `;

console.log(report);

function findLargeWithdrawals(transactions) {
    const largeWithdrawals = transactions.filter(transaction => {
        return transaction.type === "withdrawal" &&
        transaction.amount > 10000;
    });
    return largeWithdrawals;
}

const largeWithdrawals = findLargeWithdrawals(transactions);

largeWithdrawals.forEach(transaction => {
    console.log("⚠️ Large Withdrawal Detected");
    console.log(`Amount: ${transaction.amount} CZK`);
});


