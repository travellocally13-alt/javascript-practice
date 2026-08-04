let studentName = "Jane Smith";
let subjectMarks = 75;
let subjectMarks1 = 90;
let subjectMarks2 = 82;
let subjectMarks3 = 95;
let subjectMarks4 = 70;

let totalMarks = subjectMarks + subjectMarks1 + subjectMarks2 + subjectMarks3 + subjectMarks4;
let percentage = (totalMarks/500) * 100;

console.log(`*****************************`);
console.log(`    STUDENT GRADE REPORT`);
console.log(`*****************************`);
console.log(``);
console.log(`Student Name : ${studentName}`);
console.log("");
console.log(`English      : ${subjectMarks}`);
console.log(`Maths        : ${subjectMarks1}`);
console.log(`Science      : ${subjectMarks2}`);
console.log(`Computer     : ${subjectMarks3}`);
console.log(`History      : ${subjectMarks4}`);


console.log(`--------------------------------`);

console.log(`Total Marks     : ${totalMarks}`);
console.log(`Percentage      : ${percentage.toFixed(2)}%`);
if (percentage >= 90) {
console.log(`Grade           : A`);
} else if (percentage >= 80) {
console.log(`Grade           : B`);
} else if (percentage >= 70) {
console.log(`Grade           : C`);
} else if (percentage >= 60) {
console.log(`Grade           : D`);
} else {
console.log(`Grade           : F`);
}
console.log(`Result          : ${percentage >= 40 ? "Pass" : "Fail"}`);

console.log(`--------------------------------`);
console.log(`         End of Report`);




