const employees = [
    { name: "John", salary: 40000 },
    { name: "Anna", salary: 55000 },
    { name: "Peter", salary: 45000 }
];

const updatedEmployees = employees.map (employee => {
    return {
        name: employee.name,
        salary: Math.round(employee.salary * 1.10)
    };
});

console.log(updatedEmployees);

const employeeListElement = document.getElementById("employee-list");

updatedEmployees.forEach(employee => {
    employeeListElement.innerHTML += `<p>${employee.name} : ${employee.salary} CZK</p>`;
});



