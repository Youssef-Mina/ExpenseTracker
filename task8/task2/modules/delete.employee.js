const readEmployees = require("./read.employee");
const saveEmployees = require("./save.employee");

async function deleteEmployees(id){
    try{
       const employees= await readEmployees();
         let index= employees.findIndex((employee)=>{
           return employee.id===id;
         })
        
          if(index===-1){
            console.log("Can't find ID");
            return;
          }
          employees.splice(index,1);
          saveEmployees(employees);
    }catch{
        console.log(error);
    }

}
module.exports=deleteEmployees;