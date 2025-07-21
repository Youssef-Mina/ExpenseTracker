const readGrades = require("./read.grades");
const saveGrades = require("./save.grades");

async function deleteGrades(id){
    try{
       const grades= await readGrades();
         let index= grades.findIndex((grade)=>{
           return grade.id===id;
         })
        
          if(index===-1){
            console.log("Can't find ID");
            return;
          }
          grades.splice(index,1);
          saveGrades(grades);
    }catch{
        console.log(error);
    }

}
module.exports=deleteGrades;