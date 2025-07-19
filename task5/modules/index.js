

const addItem = require("./addItem");
const listInventory = require("./listInventory");
const checkLowStock = require("./checkLowStock");
const deleteItem = require("./deleteItems");

// Test Commands
addItem(103,"Moniter", 2);
listInventory();
checkLowStock();
deleteItem(101);
listInventory();
