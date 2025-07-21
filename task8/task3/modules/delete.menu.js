const readMenu = require("./read.menu");
const saveMenu = require("./save.menu");

async function deleteMenu(id){
    try{
       const menu= await readMenu();
         let index= menu.findIndex((item)=>{
           return item.id===id;
         })
        
          if(index===-1){
            console.log("Can't find ID");
            return;
          }
          menu.splice(index,1);
          saveMenu(menu);
    }catch{
        console.log(error);
    }

}
module.exports=deleteMenu;