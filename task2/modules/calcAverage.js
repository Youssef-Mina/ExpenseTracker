const students=require("../data/students");
function calcAverage(name) {
  const student = students.find((s) => s.name === name);
  if (!student) {
    console.log("Student is not in the system");
    return;
  }
  console.log(`Student Grade Average is ${(student.grade1 + student.grade2) / 2}`);
}
module.exports=calcAverage;