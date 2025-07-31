const connectDB = require("./config/expense.dataBase");
const express = require("express");
const router =require("./routes/router");

const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());




app.listen(PORT, () => {
  console.log("SERVER 3000🛜");
});


