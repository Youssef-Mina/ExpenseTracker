const readMenu = require("./read.menu");
const saveMenu = require("./save.menu");

async function updateMenu(id, name){
    try{
        const menu= await readMenu();
                  let index= menu.findIndex((item)=>{
                   return item.id===id;
                  })
                  if(index===-1){
                    console.log("Can't find ID");
                    return;
                  }
                  if(!name){
                    console.log("Name is missing");
                    return;
                  }
                  menu[index].name=name;
                  saveMenu(menu);

    }catch{
        console.log("error");
    }

}
module.exports=updateMenu;