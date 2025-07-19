const inventory = require("../data/inventory");

function checkLowStock() {
  const lowStockItems = inventory.filter(item => item.quantity < 5);
  if (lowStockItems.length === 0) {
    console.log("No low-stock items.");
    return;
  }
  console.log("Low Stock Items:");
  lowStockItems.forEach(item => {
    console.log(`- ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}`);
  });
}

module.exports = checkLowStock;