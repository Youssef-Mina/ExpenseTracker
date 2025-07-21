const readGrades = require("./read.grades");
const saveGrades = require("./save.grades");

async function addGrades(name,grade){
    try{ 
        if(!name ||!grade){
            console.log("incomplete info");
            return;
        }
      const grades= await readGrades();
      let newgrade={id:grades.length+1,name,grade};
      grades.push(newgrade);
      saveGrades(grades);
    }
    catch{
        console.log("error");
    }
}

module.exports=addGrades;