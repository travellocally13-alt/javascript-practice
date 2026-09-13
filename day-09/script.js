const employees = [
    { name: "John", salary: 40000, department: "IT" },
    { name: "Anna", salary: 55000, department: "Finance" },
    { name: "Peter", salary: 45000, department: "IT" },
    { name: "Lisa", salary: 60000, department: "HR" },
    { name: "Mike", salary: 35000, department: "IT" }
];

const totalEmployeesElement = document.getElementById("total-employees");
const totalEmployees = employees.length;
totalEmployeesElement.textContent = totalEmployees;

const itEmployeesElement = document.getElementById("it-employees");
const itEmployees = employees.filter(employee => {
    return employee.department === "IT";
});
const totalItEmployees = itEmployees.length;
itEmployeesElement.textContent = totalItEmployees;

const totalPayrollElement = document.getElementById("total-payroll");
const totalPayroll = employees.reduce((total,employee) => {
    return total + employee.salary;
},0);
totalPayrollElement.textContent = totalPayroll + " CZK";

const highEarnersElement = document.getElementById("high-earners")
const highEarners = employees.filter(employee => {
    return employee.salary >= 50000;
});
highEarnersElement.textContent = highEarners.length;


