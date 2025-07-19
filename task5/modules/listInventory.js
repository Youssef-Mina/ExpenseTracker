const inventory = require("../data/inventory");

function listInventory() {
  console.log("Current Inventory:");
  inventory.forEach(item => {
    console.log(`- ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}`);
  });
}

module.exports = listInventory;