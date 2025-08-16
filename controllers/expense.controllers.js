const Expense = require("../models/expense.model");

const addExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res
      .status(201)
      .json({
        status: "success",
        message: "Expense Added Successfully",
        data: { expense: expense },
      });
  } catch (error) {
    res
      .status(400)
      .json({ status: "fail", message: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({ comment: req.params.comment });
    res.status(200).json({
      status: "success",
      message: "Expense Deleted Successfully",
      data: { expense: expense },
    });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndUpdate({ comment: req.params.comment }, req.body,{new:true});
    res.status(200).json({
      status: "success",
      message: "Expense Updated Successfully",
      data: { expense: expense },
    });
  } catch (error) {
    res.status(400).json({ status: "ERROR", message: error.message });
  }
};

const getExpense = async (req, res) => {
  try {
      const sortBy = req.query.sortBy || "date";
      const order = req.query.order==="desc"?-1:1;

   
    const expense = await Expense.find().sort({[sortBy]:order});
    res.status(200).json({
      status: "success",
      length: expense.length,
      data: { expense: expense },
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

const getExpenseByComment = async (req, res) => {
  try {
    const expense = await Expense.find({ comment: req.params.comment });
    res
      .status(200)
      .json({
        status: "success",
        message: "Expense Found",
        data: { expense: expense },
      });
  } catch (error) {
    res.status(404).json({ status: "fail", message: "Can't Find Expense" });
  }
};

module.exports = {
  addExpense,
  deleteExpense,
  updateExpense,
  getExpense,
  getExpenseByComment,
};
