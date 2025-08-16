const express = require("express");
const usercontrollers = require("../controllers/user.controllers");
const router = express.Router();

const upload = require("../middleware/upload.middleware");
const multerErrorHandler = require("../middleware/multer.error.handler");

router
  .route("/signup")
  .post(upload.single("photo"), multerErrorHandler, usercontrollers.signup);

router.route("/login").post(usercontrollers.login);

module.exports = router;
