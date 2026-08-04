let employeeName = "John Doe";
let monthlySalary = 40000;
let bonus = 5000;
let taxPercentage = 21;

let taxAmount = monthlySalary * (taxPercentage / 100);
let netSalary = (monthlySalary + bonus) - taxAmount;
let annualSalary = (monthlySalary * 12) + bonus;
let annualNetSalary = annualSalary - taxAmount;




console.log(`*****************************`);
console.log(`    EMPLOYEE SALARY REPORT`);
console.log(`*****************************`);
console.log(``);

console.log(`Employee Name : ${employeeName}`);
console.log(`Monthly Salary: ${monthlySalary.toLocaleString()} CZK`);
console.log(`Bonus         : ${bonus.toLocaleString()} CZK`);
console.log(`Annual Salary : ${annualSalary.toLocaleString()} CZK`);
console.log(`Tax           : ${taxAmount.toLocaleString()} CZK`);
console.log(`Net Salary    : ${netSalary.toLocaleString()} CZK`);
console.log(``);

if (monthlySalary >= 60000) {
    console.log(`Perfomance : Excellent`);
} else if (monthlySalary >= 40000) {
    console.log(`Perfomance       : Good`);
} else {
    console.log(`Perfomance       : Average`);
}

if (annualNetSalary >= 500000) {
    console.log(`Financial Status : Excellent`);
}
else {
    console.log(`Financial Status : Needs Improvement`);
}
