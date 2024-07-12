const express = require("express");
const {
  helloController,
  registerController,
  loginController,
} = require("../Controller/userCtrl");
const router = express.Router();

router.get("/hello", helloController);

router.post("/register", registerController);

router.post("/login", loginController);

module.exports = router;
