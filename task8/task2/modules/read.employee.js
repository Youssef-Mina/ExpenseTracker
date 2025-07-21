const { readFile } = require("fs").promises;
const path = require("path");
const filePath = path.join(__dirname, "../data/employees.json" )

async function readEmployees() {
  try {
    const data = await readFile(filePath, "utf-8");
    const employees = JSON.parse(data);
    return employees;
  } catch (error) {
    console.log(error);
  }
}

module.exports = readEmployees;
