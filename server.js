const connectDB = require("./config/expense.dataBase");
const express = require("express");
const expenseRouter =require("./routes/expenses.router");
const userRouter = require("./routes/user.routes");
const incomeRouter=require("./routes/income.routes");
const path=require("path");
const cors=require("cors");

const app = express();
app.use(cors({
  origin:"http://localhost:4200"
}))

require("dotenv").config();
app.use("/uploads", express.static(path.join(__dirname, "uploads")))
connectDB();
app.use(express.json());

app.use("/expenses",expenseRouter);
app.use("/users",userRouter);
app.use("/incomes",incomeRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`SERVER ${PORT}🛜`);
});


