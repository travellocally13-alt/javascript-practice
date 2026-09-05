
const sales = [
    { customer: "John", amount: 2500 },
    { customer: "Anna", amount: 7500 },
    { customer: "Peter", amount: 8000 },
    { customer: "Sarah", amount: 12000 },
    { customer: "David", amount: 4500 },
    { customer: "Mike", amount: 0 },
    { customer: "Lisa", amount: -500 },
    { customer: " ", amount: 3000 }
];

const totalSalesElement = document.getElementById("total-sales");

const totalSales = sales.length;
totalSalesElement.textContent = totalSales;

const totalRevenueElement = document.getElementById("total-revenue");
const validSales = sales.filter(sale => {
    return sale.amount > 0 && sale.customer.trim() !== "";
});

const totalRevenue = validSales.reduce((total, sale) => {
    return total + sale.amount;
},0);

totalRevenueElement.textContent = totalRevenue.toLocaleString() + " CZK";

const vipCustomersElement = document.getElementById("vip-customers");
const vipCustomers = sales.filter(sale => {
    return sale.amount >= 7000;
});

const totalVipCustomers = vipCustomers.length;

vipCustomersElement.textContent = totalVipCustomers;

const vipCustomerListElement = document.getElementById("vip-customer-list");

vipCustomers.forEach(sale => {
    vipCustomerListElement.innerHTML +=
    `<p>${sale.customer} : ${sale.amount.toLocaleString()} CZK</p>`;
});

const invalidSales = sales.filter(sale => {
    return !(sale.amount > 0 && sale.customer.trim() !== "");
});

const invalidSalesElement = document.getElementById("invalid-sales");

invalidSales.forEach(sale => {
    let customerName = sale.customer.trim();

    if (customerName === "") {
        customerName = "Unknown Customer";
    }

    invalidSalesElement.innerHTML +=
        `<p>${customerName} : ${sale.amount.toLocaleString()} CZK</p>`;
});

const averageSaleElement = document.getElementById("average-sale");

const averageSale = totalRevenue / validSales.length;

averageSaleElement.textContent = averageSale.toLocaleString() + " CZK";

const validSalesElement = document.getElementById("valid-sales");
const totalValidSales = validSales.length;

validSalesElement.textContent = totalValidSales;




