const students=require("../data/students");

function addStudent(name, grade1, grade2){
    const newStudent={
    id: students.length+1,
    name: name,
    grade1: grade1,
    grade2: grade2
}
students.push(newStudent);
console.log(`Student ${name} is added`);
}
module.exports=addStudent;