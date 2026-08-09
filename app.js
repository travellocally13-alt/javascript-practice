function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Kepler");
greet("John");
greet("Jane");

function add(a,b) {
    return a + b;
}

console.log(add(10,20));
console.log(add(5,15));

function calculateArea(length, width) {
    return length * width;
}

console.log(`Area = ${calculateArea(5, 10)}`);

function isEven(number) {
    return number % 2 === 0;
}

console.log (isEven(20));
console.log (isEven(17));

function sayGoodMorning(name) {
    console.log(`Good Morning ${name}!`);
}

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
    console.log(`Transaction ${i + 1}: ${transactions[i]}`);
}





