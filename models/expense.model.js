const mongoose=require("mongoose");


const expenseschema=new mongoose.Schema({
    category:{type: String, required:[ true, "Category is Required"],},
    amount:{type: Number , required:[true, "Amount of Money is Required"]},
    comment:{type: String},
    date:{type: Date, required:[true, "Date is Required"]}
})

const Expense= mongoose.model("Expense", expenseschema);

module.exports=Expense;