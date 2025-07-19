const contacts = require("../data/contacts");

function listcontact(){
    if(!contacts.length){
        console.error("nothing to show");
    }
    console.log("##################### CONTACTS #####################");
    contacts.forEach((contact)=>{
    console.log(`ID: ${contact.id} \t Name: ${contact.Name} \t Phone: ${contact.Phone} `)
    })
}
module.exports=listcontact;