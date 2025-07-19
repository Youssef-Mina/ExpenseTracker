const contacts = require("../data/contacts");

function deletecontact(id) {
  const index = contacts.findIndex((contact) => contact.id === id); 

  if (index < 0) {
    console.error(`Contact with ID ${id} not found.`);
    return;
  }

  contacts.splice(index, 1);
  console.log(`Contact with ID ${id} deleted`);
}

module.exports = deletecontact;
