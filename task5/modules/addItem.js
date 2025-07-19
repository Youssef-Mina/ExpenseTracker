const inventory = require("../data/inventory");

function addItem(id, name, quantity) {
  if (inventory.find(item => item.id === id)) {
    console.log("Item with this ID already exists.");
    return;
  }
  inventory.push({ id, name, quantity });
  console.log("Item added successfully.");
}

module.exports = addItem;