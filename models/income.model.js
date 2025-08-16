const mongoose = require("mongoose");

const incomeschema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Category is Required"],
    enum: [
      "salary",
      "commission",
      "freelance",
      "investments",
      "miscellaneous",
    ],
  },
  amount: { type: Number, required: [true, "Amount of Money is Required"] },
  comment: { type: String },
  date: { type: Date, required: [true, "Date is Required"] },
});

const Income = mongoose.model("Income", incomeschema);

module.exports = Income;
