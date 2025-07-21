const addMenu = require("./modules/add.menu.js");
const deleteMenu = require("./modules/delete.menu.js");
const readMenu = require("./modules/read.menu.js");
const updateMenu = require("./modules/update.menu.js");

async function main(){
    await addMenu("burger","main",true);
    console.log(await readMenu());
    await deleteMenu(3);
    console.log(await readMenu());
    await updateMenu(2,"Margerita pizza")
    console.log(await readMenu());
 }
 main();