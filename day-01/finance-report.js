console.log(`================================`);
console.log(`    PERSONAL FINANCE REPORT`);
console.log(`================================`);
console.log(``);

let monthlySalary = 35000;
let rent = 12000;
let food = 6000;
let transport = 2000;

let totalExpenses = rent + food + transport;
let monthlySavings = monthlySalary - totalExpenses;
let annualSalary = monthlySalary * 12;
let annualSavings = monthlySavings * 12;


console.log(`Monthly Salary: ${monthlySalary} CZK`);
console.log(`Rent          : ${rent} CZK`);
console.log(`Food          : ${food} CZK`);
console.log(`Transport     : ${transport} CZK`);

console.log(``);

console.log(`Total Expenses: ${totalExpenses} CZK`);
console.log(`Savings       : ${monthlySavings} CZK`);

console.log(``);

console.log(`Annual Salary : ${annualSalary} CZK`);
console.log(`Annual Savings: ${annualSavings} CZK`);

