const { writeFile } = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "../data/employees.json" )

function saveEmployees(employees){
    try{
        writeFile(filePath, JSON.stringify(employees, null, 2));
}catch(error){
    console.log(Error);
}
}
module.exports=saveEmployees;