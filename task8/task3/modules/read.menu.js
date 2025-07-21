const { readFile } = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "../data/menu.json" )

async function readMenu() {
  try {
    const data = await readFile(filePath, "utf-8");
    const menu = JSON.parse(data);
    return menu;
  } catch (error) {
    console.log(error);
  }
}

module.exports = readMenu;