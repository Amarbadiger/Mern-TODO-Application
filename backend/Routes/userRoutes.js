const express = require("express");
const {
  helloController,
  registerController,
  loginController,
  authController,
} = require("../Controller/userCtrl");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/hello", helloController);

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/getUserdata", authMiddleware, authController);

module.exports = router;
