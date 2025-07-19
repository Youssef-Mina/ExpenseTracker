const contacts = require("../data/contacts");
const addcontact = require("./addContact");
const deletecontact= require("./deleteContact");
const listcontact = require("./listcontact");
const searchContact = require("./searchContact");

addcontact("David", "01229586331");
listcontact();
deletecontact(2);
searchContact(1);