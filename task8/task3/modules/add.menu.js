const readMenu = require("./read.menu");
const saveMenu = require("./save.menu");

async function addMenu(name,category,price){
    try{ 
        if(!name ||!category||!price){
            console.log("incomplete info");
            return;
        }
      const menu= await readMenu();
      let newitem={id:menu.length+1,name,category,price};
      menu.push(newitem);
      saveMenu(menu);
    }
    catch{
        console.log("error");
    }
}

module.exports=addMenu;