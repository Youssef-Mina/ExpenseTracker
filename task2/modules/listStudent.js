const students=require("../data/students");
 function listStudent(){
    if(!students.length){
        console.log("Empty");
    }
    console.log("#############CLASSWORK#############");
    students.forEach((student)=>{
    console.log(`ID: ${student.id} \t Name: ${student.name} \t Grade 1: ${student.grade1}\t Grade 2: ${student.grade2}`);
    })

 }
 module.exports=listStudent;