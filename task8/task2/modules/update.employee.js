const readEmployees = require("./read.employee");
const saveEmployees = require("./save.employee");

async function updateEmployees(id, department){
    try{
        const employees= await readEmployees();
                  let index= employees.findIndex((employee)=>{
                   return employee.id===id;
                  })
                  if(index===-1){
                    console.log("Can't find ID");
                    return;
                  }
                  if(!department){
                    console.log("department is missing");
                    return;
                  }
                  employees[index].department=department;
                  saveEmployees(employees);

    }catch{
        console.log("error");
    }

}
module.exports=updateEmployees;