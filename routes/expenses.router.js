const expenseControllers = require("../controllers/expense.controllers");
const express = require("express");
const userControllers = require("../controllers/user.controllers");

const router = express.Router();

router
  .route("/")
  .post(expenseControllers.addExpense)
  .get(expenseControllers.getExpense);
  // .get(userControllers.protectRoutes, expenseControllers.getExpense);
router
  .route("/:comment")
  .get(expenseControllers.getExpenseByComment)
  .delete(expenseControllers.deleteExpense)
  .patch(expenseControllers.updateExpense);

module.exports = router;
