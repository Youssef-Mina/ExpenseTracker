const addGrades = require("./modules/add.grades.js");
const deleteGrades = require("./modules/delete.grades.js");
const readGrades = require("./modules/read.grades.js");
const updateGrades = require("./modules/update.grades.js");

async function main(){
    await addGrades("Ahmed",40);
    console.log(await readGrades());
    await deleteGrades(3);
    console.log(await readGrades());
    await updateGrades(2,100)
    console.log(await readGrades());
 }
 main();