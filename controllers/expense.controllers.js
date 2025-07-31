const Expense = require("../models/expense.model");

const addExpense = async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res
      .status(201)
      .json({
        status: "success",
        message: "Expense Added Successfully",
        data: { movie: movie },
      });
  } catch (error) {
    res
      .status(400)
      .json({ status: "fail", message: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete(req.params.comment);
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
    const expense = await Expense.findOneAndUpdate(req.params.comment, req.body,{new:true});
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
    const expense = await Expense.find();
    res.status(200).json({
      status: "success",
      length: Expense.length,
      data: { expense: expense },
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

const getExpenseByComment = async (req, res) => {
  try {
    const expense = await Expense.findOne(req.params.comment);
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
