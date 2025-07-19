const students=require("../data/students");

function filterStudents(){
const passed = students.filter(student => {
    const average = (student.grade1 + student.grade2) / 2;
    return average >= 60;
  });
   console.log("Students who passed:");
  passed.forEach(student => {
    const avg = (student.grade1 + student.grade2) / 2;
    console.log(`Name: ${student.name} \t Average: ${avg}`);
  });
}
module.exports=filterStudents;