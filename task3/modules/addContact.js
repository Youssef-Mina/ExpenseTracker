const contacts = require("../data/contacts");

function addcontact(name,phone){
    if(phone.length<11){
    console.log("incorrect number");
    return;
}
const newcontact={
id:contacts.length+1,
name:name,
phone:phone,
}
contacts.push(newcontact);
console.log(`Contact ${name} is added`)
}
module.exports=addcontact;