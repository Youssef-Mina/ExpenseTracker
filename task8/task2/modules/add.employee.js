const readEmployees = require("./read.employee");
const saveEmployees = require("./save.employee");

async function addEmployees(name,department,title){
    try{ 
        if(!name ||!title||!department){
            console.log("incomplete info");
            return;
        }
      const employees= await readEmployees();
      let newemployee={id:employees.length+1,name,department,title};
      employees.push(newemployee);
      saveEmployees(employees);
    }
    catch{
        console.log("error");
    }
}

module.exports=addEmployees;