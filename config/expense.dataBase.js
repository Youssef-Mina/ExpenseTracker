const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://youseefmena2002:ZNTKxaWutDrTa8Rt@expenses.v1u305b.mongodb.net/?retryWrites=true&w=majority&appName=Expenses",
      { dbName: "ExpenseTrackerDB" }
    );
    await console.log("Server meya meya wadii✅");
  } catch (error) {
    console.log("el server we2e3 ya beh ❌");
  }
};


module.exports=connectDB;