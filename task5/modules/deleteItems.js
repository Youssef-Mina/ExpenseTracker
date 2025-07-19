const inventory = require("../data/inventory");

function deleteItem(id) {
  const index = inventory.findIndex(item => item.id === id);
  if (index === -1) {
    console.log("Item not found.");
    return;
  }
  inventory.splice(index, 1);
  console.log("Item deleted successfully.");
}

module.exports = deleteItem;