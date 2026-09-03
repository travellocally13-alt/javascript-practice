console.log("=========== CSV Sales Analyzer ==========");
console.log(``);
const fs = require("fs");
const data = fs.readFileSync("sales.csv", "utf8");

const rows = data.trim().split(/\r?\n/);

const row = "John,2500,CZ";

const values = row.split(",");

const salesRows = rows.slice(1);

const sales = salesRows.map(row => {
    const values = row.split(",");

    return {
        customer: values[0],
        amount: Number(values[1]),
        country: values[2]
    };
});

const validSales = sales.filter(sale => {
    return sale.amount > 0 && sale.customer.trim() !== "";
});

const totalValidSales = validSales.length;
const totalSales = sales.length;
const totalInvalidSales = totalSales - totalValidSales;

console.log(`Total Sales : ${totalSales}`);
console.log(`Valid Sales : ${totalValidSales}`);
console.log(`Invalid Sales : ${totalInvalidSales}`);
console.log(``);

const totalRevenue = validSales.reduce((total, sale) => {
    return total + sale.amount;
},0);

console.log(`Total Revenue: ${totalRevenue.toLocaleString()} CZK`);
console.log(``);

const vipSales = validSales.filter(sale => {
    return sale.amount > 5000;
});

const totalVipCustomers = vipSales.length;

const vipCustomerDetails = vipSales.map(sale => {
    return `${sale.customer} : ${sale.amount} CZK`;
});

console.log(`VIP Customers : ${totalVipCustomers}`);

vipCustomerDetails.forEach(customer => {
    console.log(customer);
});

const invalidSales = sales.filter(sale => {
    return sale.amount <= 0 || sale.customer === undefined || sale.customer.trim() === "";
});

const invalidSaleDetails = invalidSales.map(sale => {
    return `${sale.customer} : ${sale.amount} CZK`;
});

console.log(``);
console.log(`Invalid Sales:`);
invalidSaleDetails.forEach(sale => {
    console.log(sale);
});

const averageSale = totalRevenue / validSales.length;
console.log(`Average Sale : ${averageSale.toLocaleString()} CZK`);
















