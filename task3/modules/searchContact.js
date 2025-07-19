const contacts = require("../data/contacts");

function searchContact(id){
const index = contacts.findIndex((contact) => contact.id === id); 

if (index < 0) {
  console.error(`Contact with ID ${id} not found.`);
  return;
}
const contact = contacts[index];
console.log(`Id: ${contact.id} \t Name: ${contact.Name} \t Number: ${contact.Phone}`);
}
module.exports=searchContact;