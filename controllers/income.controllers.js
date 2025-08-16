const Income =require("../models/income.model");


const addIncome = async (req, res) => {
  try {
    const income = await Income.create(req.body);
    res
      .status(201)
      .json({
        status: "success",
        message: "Income Added Successfully",
        data: { income: income },
      });
  } catch (error) {
    res
      .status(400)
      .json({ status: "fail", message: error.message });
  }
};

const deleteIncome = async (req, res) => {
  try {
    const income = await Income.findOneAndDelete({ comment: req.params.comment });
    res.status(200).json({
      status: "success",
      message: "Income Deleted Successfully",
      data: { income: income },
    });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

const updateIncome = async (req, res) => {
  try {
    const income = await Income.findOneAndUpdate({ comment: req.params.comment }, req.body,{new:true});
    res.status(200).json({
      status: "success",
      message: "Income Updated Successfully",
      data: { income: income },
    });
  } catch (error) {
    res.status(400).json({ status: "ERROR", message: error.message });
  }
};

const getIncome = async (req, res) => {
  try {
      const sortBy = req.query.sortBy || "date";
      const order = req.query.order==="desc"?-1:1;

   
    const income = await Income.find().sort({[sortBy]:order});
    res.status(200).json({
      status: "success",
      length: income.length,
      data: { income: income },
    });
  } catch (error) {
    res.status(404).json({ status: "fail", message: error.message });
  }
};

const getIncomeByComment = async (req, res) => {
  try {
    const income = await Income.find({ comment: req.params.comment });
    res
      .status(200)
      .json({
        status: "success",
        message: "Income Found",
        data: { income: income },
      });
  } catch (error) {
    res.status(404).json({ status: "fail", message: "Can't Find Income" });
  }
};

module.exports = {
  addIncome,
  deleteIncome,
  updateIncome,
  getIncome,
  getIncomeByComment,
};
