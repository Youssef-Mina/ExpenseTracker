const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DBNAME,
    });
    console.log("Server meya meya wadii✅");
  } catch (error) {
    console.log("el server we2e3 ya beh ❌");
  }
};

module.exports = connectDB;
