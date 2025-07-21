const addEmployees = require("./modules/add.employee.js");
const deleteEmployees = require("./modules/delete.employee.js");
const readEmployees = require("./modules/read.employee.js");
const updateEmployees = require("./modules/update.employee.js");

async function main(){
    await addEmployees("Ahmed","vetrenary","Vet");
    console.log(await readEmployees());
    await deleteEmployees(3);
    console.log(await readEmployees());
    await updateEmployees(2,"pharmacy")
    console.log(await readEmployees());
 }
 main();