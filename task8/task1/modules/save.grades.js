const { writeFile } = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "../data/grades.json" )

function saveGrades(grades){
    try{
        writeFile(filePath, JSON.stringify(grades, null, 2));
}catch(error){
    console.log(Error);
}
}
module.exports=saveGrades;