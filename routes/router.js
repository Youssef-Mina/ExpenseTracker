const controllers = require("../controllers/expense.controllers");
const express = require("express");

const router = express.Router();

router.route("/").post(controllers.addExpense).get(controllers.getExpense);

router
  .route("/:comment")
  .get(controllers.getExpenseByComment)
  .delete(controllers.deleteExpense)
  .patch(controllers.updateExpense);

module.exports = router;
