const incomeControllers = require("../controllers/income.controllers");
const express = require("express");
const userControllers = require("../controllers/user.controllers");

const router = express.Router();

router
  .route("/")
  .post(incomeControllers.addIncome)
  .get(incomeControllers.getIncome);
  // .get(userControllers.protectRoutes,incomeControllers.getIncome);

router
  .route("/:comment")
  .get(incomeControllers.getIncomeByComment)
  .delete(incomeControllers.deleteIncome)
  .patch(incomeControllers.updateIncome);

module.exports = router;
