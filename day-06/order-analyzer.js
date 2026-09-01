
console.log(`=============== ORDER ANALYZER ===============`);
console.log(``);

const orders = [
    { customer: "John", amount: 2500, country: "CZ"},
    { customer: "Anna", amount: 7500, country: "CZ"},
    { customer: "Peter", amount: 8000, country: "DE"},
    { customer: "Sarah", amount: 12000, country: "CZ"},
    { customer: "David", country: "CZ" },
    { customer: "Mike", amount: 0, country: "CZ" },
    { customer: "Lisa", amount: -500, country: "CZ" }
];

function findLargeOrders(orders) {
    const largeOrders = orders.filter(order => {
        return order.amount > 5000 && order.country === "CZ";
    });

    return largeOrders;

}

const largeOrders = findLargeOrders(orders);

const vipCustomers = orders.filter(order => {
    return order.amount > 5000 && order.country === "CZ";
})
.map(order => {
    return `${order.customer} - ${order.amount} CZK`;
});


function findInvalidOrders(orders) {
    const invalidOrders = orders.filter(order => {
        return order.amount === undefined || order.amount === 0 || order.amount < 0;
    });

    return invalidOrders;
}

const invalidOrders = findInvalidOrders(orders);


function findValidOrders(orders) {
    const validOrders = orders.filter(order => {
        return order.amount !== undefined && order.amount > 0;
        
    });

    return validOrders;
}

const validOrders = findValidOrders(orders);


const totalValidOrderValue = validOrders.reduce((total, order) => {
    return total + order.amount;
},0);

console.log(`Total Orders: ${orders.length}`);
console.log(`Valid Orders: ${validOrders.length}`);
console.log(`Invalid Orders: ${invalidOrders.length}`);

console.log(`Total Value of Valid Orders: ${totalValidOrderValue} CZK `);
console.log(``);
console.log(`VIP Customers:`);
const vipCustomerDetails = largeOrders.map(order => {
    return `${order.customer} - ${order.amount} CZK`;
});
vipCustomerDetails.forEach(order => {
    console.log(order);
});



