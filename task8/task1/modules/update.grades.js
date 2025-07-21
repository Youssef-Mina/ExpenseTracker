const readGrades = require("./read.grades");
const saveGrades = require("./save.grades");

async function updateGrades(id, grade){
    try{
        const grades= await readGrades();
                  let index= grades.findIndex((g)=>{
                   return g.id===id;
                  })
                  if(index===-1){
                    console.log("Can't find ID");
                    return;
                  }
                  if(!grade){
                    console.log("Grade is missing");
                    return;
                  }
                  grades[index].grade=grade;
                  saveGrades(grades);

    }catch{
        console.log("error");
    }

}
module.exports=updateGrades;